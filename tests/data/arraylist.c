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
    ArrayList* result = 0;
    result = (ArrayList*)malloc(sizeof(ArrayList));
    if (result)
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
    list->data = (ListData*)malloc(sizeof(ListData) * 5);
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
    if (list)
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
    ListData* tmp = 0;
    tmp = (ListData*)malloc(sizeof(ListData) * target);
    if (tmp)
    {
        memcpy(tmp, list->data, sizeof(ListData) * list->size);
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
    int target = 0, delta = list->capacity;
    while (1)
    {
        if (delta <= 0) {
            return 0;
        }
        target = list->capacity + delta;
        if (target < 0) {
            delta >>= 1;
            continue;
        }
        if (expandListToCapacity(list, target))
        {
            return delta;
        }
        else
        {
            delta >>= 1;
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
    if ((index > list->size) || (index < 0))
    {
        return -2;  // -2: index超出范围
    }
    if (list->size >= list->capacity)
    {
        if (!expandList(list))
        {
            return -1;  // -1: 内存空间不足。
        }
    }
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
    if ((index >= list->size) || (index < 0))
    {
        return -2;  // -2: index超出范围
    }
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
    return removeFromListByIndex(list, getIndexFromList(list, val));
}

/*
 合并两个ArrayList。将src合并到dest。
 \param dest
 \param src
 \return dest
 */
ArrayList* combineList(ArrayList* dest, ArrayList* src)
{
    int target;
    target = dest->size + src->size;
    if (dest->capacity < target)
    {
        expandListToCapacity(dest, target);
    }
    memcpy(&(dest->data[dest->size]), src->data, sizeof(ListData) * src->size);
    dest->size += src->size;
    return dest;
}

/*
 给ArrayList排序（快排）。
 \param list 待排序的Array
 \param l 排序区间的起始位置
 \param r 排序区间的终止位置
 \return 排好序的ArrayList
 */
ArrayList* sortList(ArrayList* list, int l, int r)
{
    int i, j;
    ListData t, m;
    i = l; j = r; m = list->data[(l + r) >> 1];
    do
    {
        while (list->data[i] < m) ++i;
        while (list->data[j] > m) --j;
        if (i <= j)
        {
            t = list->data[i]; list->data[i] = list->data[j]; list->data[j] = t;
            ++i; --j;
        }
    } while (i <= j);
    if (l < j) sortList(list, l, j);
    if (i < r) sortList(list, i, r);
    return list;
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
    ArrayList* list1, *list2;
    int i;
    printf("Start test ArrayList.\n\n");
    printLog("Create an ArrayList.", "<empty>", (int)(list1 = createList()));
    printLog("Initialize the ArrayList.", "list1.init()", initList(list1));
    printLog("Create an ArrayList.", "<empty>", (int)(list2 = createList()));
    printLog("Initialize the ArrayList.", "list2.init()", initList(list2));
    
    printLog("Insert to the ArrayList.", "list1[0]=5", insertToList(list1, 5, 0));
    printLog("Insert to the ArrayList.", "list1[1]=2", insertToList(list1, 2, 1));
    printLog("Insert to the ArrayList.", "list1[2]=8", insertToList(list1, 8, 2));
    printLog("Insert to the ArrayList.", "list1[3]=9", insertToList(list1, 9, 3));
    printLog("Remove from the ArrayList by value", "list1.removeValue(9)", removeFromListByValue(list1, 9));
    printLog("Insert to the ArrayList.", "list1[3]=0", insertToList(list1, 0, 3));
    printLog("Insert to the ArrayList.", "list1[4]=6", insertToList(list1, 6, 4));
    
    printLog("Insert to the ArrayList.", "list2[0]=7", insertToList(list2, 7, 0));
    printLog("Insert to the ArrayList.", "list2[0]=0", insertToList(list2, 0, 0));
    printLog("Insert to the ArrayList.", "list2[0]=9", insertToList(list2, 9, 0));
    printLog("Insert to the ArrayList.", "list2[0]=2", insertToList(list2, 2, 0));
    printLog("Insert to the ArrayList.", "list2[0]=4", insertToList(list2, 4, 0));
    
    printLog("Combine the two ArrayLists.", "list1.combine(list2)", (int)(combineList(list1, list2)));
    
    printLog("Sort the combined ArrayList.", "list1.sort()", (int)(sortList(list1, 0, list1->size - 1)));
    
    printf("Sorted list1:");
    for (i = 0; i < list1->size; ++i)
    {
        printf(" %d", list1->data[i]);
    }
    printf("\n");
    
    deleteList(list1);
    printLog("Delete the ArrayList.", "list1", 0);
    deleteList(list2);
    printLog("Delete the ArrayList.", "list2", 0);
    return 0;
}
