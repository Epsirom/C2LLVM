#include <stdlib.h>
#include <stdio.h>

typedef int ListData;

typedef struct arrayList
{
    int capacity;
    int size;
    ListData* data;
} ArrayList;

/*
 创建一个空的ArrayList。
 \return 创建结果，一个ArrayList指针。若返回0，说明创建失败。
 */
ArrayList* createList()
{
    ArrayList* result;
    result = 0;
    result = (ArrayList*)malloc(12);
    if (result != 0)
    {
        result->capacity = 0;
        result->size = 0;
        result->data = 0;
    }
    return result;
}

/*
 初始化ArrayList，初始化capacity为5。
 \param list 需要初始化的ArrayList的指针。
 \return 初始化结果，0代表成功，其他数字代表错误号。
 */
int initList(ArrayList* list)
{
    if (list->data != 0)
    {
        return 1;   // 1: 无需初始化。
    }
    list->size = 0;
    list->capacity = 5;
    list->data = (ListData*)malloc(20);
    if (list->data != 0)
    {
        return 0;
    }
    return -1;  // -1: 内存分配失败。
}

/*
 释放ArrayList。
 \param list 需要清空的ArrayList。
 \return void
 */
void releaseList(ArrayList* list)
{
    if (list->data)
    {
        free(list->data);
    }
    list->capacity = 0;
    list->size = 0;
    list->data = 0;
}

/*
 删除ArrayList。
 \param list 需要删除的ArrayList。
 \return void
 */
void deleteList(ArrayList* list)
{
    if (list != 0)
    {
        releaseList(list);
        free(list);
    }
}

/*
 得到ArrayList的数据。
 \param list 处理的list。
 \param index 索引号。
 */
ListData getDataFromList(ArrayList* list, int index)
{
    return list->data[index];
}

/*
 按需扩增ArrayList。
 \param list 被扩增的ArrayList。
 \param target 需要扩增到的容量数。
 \return 1表示成功，0表示失败。
 */
int expandListToCapacity(ArrayList* list, int target)
{
    ListData* tmp;
    int t;
    int tt;
    tmp = 0;
    t = 4 * target;
    tt = 4 * list->size;
    tmp = (ListData*)malloc(t);
    if (tmp != 0)
    {
        memcpy(tmp, list->data, tt);
        free(list->data);
        list->data = tmp;
        list->capacity = target;
        return 1;
    }
    return 0;
}

/*
 扩增ArrayList。尝试将容量翻倍，若失败就尝试增加一半，以此类推直至不增加。
 \param list 需要扩增的ArrayList。
 \return 增加的容量数。
 */
int expandList(ArrayList* list)
{
    int target;
    int delta;
    int t;
    delta = list->capacity;
    target = 0;
    while (1)
    {
        if (delta <= 0) {
            return 0;
        }
        target = list->capacity + delta;
        if (target < 0) {
            delta = delta / 2;
            continue;
        }
        t = expandListToCapacity(list, target);
        if (t == 1)
        {
            return delta;
        }
        else
        {
            delta = delta / 2;
            continue;
        }
    }
}

/*
 向ArrayList插入数据。
 \param list 被插入数据的list指针。
 \param val 被插入的数据。
 \param index 插入位置。
 \return 插入结果，0代表成功。
 */
int insertToList(ArrayList* list, ListData val, int index)
{
    int i;
    for (i = list->size; i > index; --i)
    {
        list->data[i] = list->data[i - 1];
    }
    list->data[index] = val;
    ++(list->size);
    return 0;
}

/*
 从ArrayList删除数据。
 \param list 被删除数据的list指针。
 \param index 删除位置。
 \return 删除结果。
 */
int removeFromListByIndex(ArrayList* list, int index)
{
    int i;
    for (i = index; i < list->size - 1; ++i)
    {
        list->data[i] = list->data[i + 1];
    }
    --(list->size);
    return 0;
}

/*
 在ArrayList中查找。
 \param list 被查找数据的list指针。
 \param val 被查找的数据。
 \return 找到的index，若没找到，返回-1。
 */
int getIndexFromList(ArrayList* list, ListData val)
{
    int i;
    for (i = 0; i < list->size; ++i)
    {
        if (list->data[i] == val)
        {
            return i;
        }
    }
    return -1;
}

/*
 从ArrayList删除数据。
 \param list 被删除数据的list指针。
 \param val 被删除的数据。
 \return 删除结果。
 */
int removeFromListByValue(ArrayList* list, ListData val)
{
    int index;
    index = getIndexFromList(list, val);
    return removeFromListByIndex(list, index);
}

/*
 日志化输出。
 */
void printLog(char* hint, char* params, int rtn)
{
    printf("> %s\n>> Action: %s\n>>> Returned: 0x%X\n\n", hint, params, rtn);
}

/*
 main函数，不多说。
 */
int main()
{
    ArrayList* list1;
    ArrayList* list2;
    int t;
    printf("Start test ArrayList.\n\n");
    list1 = createList();
    printLog("Create an ArrayList.", "<empty>", 0);
    t = initList(list1);
    printLog("Initialize the ArrayList.", "list1.init()", t);
    list2 = createList();
    printLog("Create an ArrayList.", "<empty>", 0);
    t = initList(list2);
    printLog("Initialize the ArrayList.", "list2.init()", t);

    t = insertToList(list1, 5, 0);
    printLog("Insert to the ArrayList.", "list1[0]=5", t);
    t = insertToList(list1, 2, 1);
    printLog("Insert to the ArrayList.", "list1[1]=2", t);
    t = insertToList(list1, 8, 2);
    printLog("Insert to the ArrayList.", "list1[2]=8", t);
    t = insertToList(list1, 9, 3);
    printLog("Insert to the ArrayList.", "list1[3]=9", t);
    t = removeFromListByValue(list1, 9);
    printLog("Remove from the ArrayList by value", "list1.removeValue(9)", t);
    t = insertToList(list1, 0, 3);
    printLog("Insert to the ArrayList.", "list1[3]=0", t);
    t = insertToList(list1, 6, 4);
    printLog("Insert to the ArrayList.", "list1[4]=6", t);

    t = insertToList(list2, 7, 0);
    printLog("Insert to the ArrayList.", "list2[0]=7", t);
    t = insertToList(list2, 0, 0);
    printLog("Insert to the ArrayList.", "list2[0]=0", t);
    t = insertToList(list2, 9, 0);
    printLog("Insert to the ArrayList.", "list2[0]=9", t);
    t = insertToList(list2, 2, 0);
    printLog("Insert to the ArrayList.", "list2[0]=2", t);
    t = insertToList(list2, 4, 0);
    printLog("Insert to the ArrayList.", "list2[0]=4", t);
    
    deleteList(list1);
    printLog("Delete the ArrayList.", "list1", 0);
    deleteList(list2);
    printLog("Delete the ArrayList.", "list2", 0);
    return 0;
}
