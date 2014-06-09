; ModuleID = 'arraylist.c'
target datalayout = "e-p:64:64:64-i1:8:8-i8:8:8-i16:16:16-i32:32:32-i64:64:64-f32:32:32-f64:64:64-v64:64:64-v128:128:128-a0:0:64-s0:64:64-f80:128:128-n8:16:32:64-S128"
target triple = "x86_64-apple-macosx10.9.0"

%struct.arrayList = type { i32, i32, i32* }

@.str = private unnamed_addr constant [40 x i8] c"> %s\0A>> Action: %s\0A>>> Returned: 0x%X\0A\0A\00", align 1
@.str1 = private unnamed_addr constant [24 x i8] c"Start test ArrayList.\0A\0A\00", align 1
@.str2 = private unnamed_addr constant [21 x i8] c"Create an ArrayList.\00", align 1
@.str3 = private unnamed_addr constant [8 x i8] c"<empty>\00", align 1
@.str4 = private unnamed_addr constant [26 x i8] c"Initialize the ArrayList.\00", align 1
@.str5 = private unnamed_addr constant [13 x i8] c"list1.init()\00", align 1
@.str6 = private unnamed_addr constant [13 x i8] c"list2.init()\00", align 1
@.str7 = private unnamed_addr constant [25 x i8] c"Insert to the ArrayList.\00", align 1
@.str8 = private unnamed_addr constant [11 x i8] c"list1[0]=5\00", align 1
@.str9 = private unnamed_addr constant [11 x i8] c"list1[1]=2\00", align 1
@.str10 = private unnamed_addr constant [11 x i8] c"list1[2]=8\00", align 1
@.str11 = private unnamed_addr constant [11 x i8] c"list1[3]=9\00", align 1
@.str12 = private unnamed_addr constant [35 x i8] c"Remove from the ArrayList by value\00", align 1
@.str13 = private unnamed_addr constant [21 x i8] c"list1.removeValue(9)\00", align 1
@.str14 = private unnamed_addr constant [11 x i8] c"list1[3]=0\00", align 1
@.str15 = private unnamed_addr constant [11 x i8] c"list1[4]=6\00", align 1
@.str16 = private unnamed_addr constant [11 x i8] c"list2[0]=7\00", align 1
@.str17 = private unnamed_addr constant [11 x i8] c"list2[0]=0\00", align 1
@.str18 = private unnamed_addr constant [11 x i8] c"list2[0]=9\00", align 1
@.str19 = private unnamed_addr constant [11 x i8] c"list2[0]=2\00", align 1
@.str20 = private unnamed_addr constant [11 x i8] c"list2[0]=4\00", align 1
@.str21 = private unnamed_addr constant [29 x i8] c"Sort the combined ArrayList.\00", align 1
@.str22 = private unnamed_addr constant [13 x i8] c"list1.sort()\00", align 1
@.str23 = private unnamed_addr constant [14 x i8] c"Sorted list1:\00", align 1
@.str24 = private unnamed_addr constant [4 x i8] c" %d\00", align 1
@.str25 = private unnamed_addr constant [3 x i8] c"\0A\0A\00", align 1
@.str26 = private unnamed_addr constant [22 x i8] c"Delete the ArrayList.\00", align 1
@.str27 = private unnamed_addr constant [6 x i8] c"list1\00", align 1
@.str28 = private unnamed_addr constant [6 x i8] c"list2\00", align 1

; Function Attrs: nounwind ssp uwtable
define %struct.arrayList* @createList() #0 {
  %result = alloca %struct.arrayList*, align 8
  store %struct.arrayList* null, %struct.arrayList** %result, align 8
  %1 = call i8* @malloc(i64 12)
  %2 = bitcast i8* %1 to %struct.arrayList*
  store %struct.arrayList* %2, %struct.arrayList** %result, align 8
  %3 = load %struct.arrayList** %result, align 8
  %4 = icmp ne %struct.arrayList* %3, null
  br i1 %4, label %5, label %12

; <label>:5                                       ; preds = %0
  %6 = load %struct.arrayList** %result, align 8
  %7 = getelementptr inbounds %struct.arrayList* %6, i32 0, i32 0
  store i32 0, i32* %7, align 4
  %8 = load %struct.arrayList** %result, align 8
  %9 = getelementptr inbounds %struct.arrayList* %8, i32 0, i32 1
  store i32 0, i32* %9, align 4
  %10 = load %struct.arrayList** %result, align 8
  %11 = getelementptr inbounds %struct.arrayList* %10, i32 0, i32 2
  store i32* null, i32** %11, align 8
  br label %12

; <label>:12                                      ; preds = %5, %0
  %13 = load %struct.arrayList** %result, align 8
  ret %struct.arrayList* %13
}

declare i8* @malloc(i64) #1

; Function Attrs: nounwind ssp uwtable
define i32 @initList(%struct.arrayList* %list) #0 {
  %1 = alloca i32, align 4
  %2 = alloca %struct.arrayList*, align 8
  store %struct.arrayList* %list, %struct.arrayList** %2, align 8
  %3 = load %struct.arrayList** %2, align 8
  %4 = getelementptr inbounds %struct.arrayList* %3, i32 0, i32 2
  %5 = load i32** %4, align 8
  %6 = icmp ne i32* %5, null
  br i1 %6, label %7, label %8

; <label>:7                                       ; preds = %0
  store i32 1, i32* %1
  br label %23

; <label>:8                                       ; preds = %0
  %9 = load %struct.arrayList** %2, align 8
  %10 = getelementptr inbounds %struct.arrayList* %9, i32 0, i32 1
  store i32 0, i32* %10, align 4
  %11 = load %struct.arrayList** %2, align 8
  %12 = getelementptr inbounds %struct.arrayList* %11, i32 0, i32 0
  store i32 5, i32* %12, align 4
  %13 = call i8* @malloc(i64 20)
  %14 = bitcast i8* %13 to i32*
  %15 = load %struct.arrayList** %2, align 8
  %16 = getelementptr inbounds %struct.arrayList* %15, i32 0, i32 2
  store i32* %14, i32** %16, align 8
  %17 = load %struct.arrayList** %2, align 8
  %18 = getelementptr inbounds %struct.arrayList* %17, i32 0, i32 2
  %19 = load i32** %18, align 8
  %20 = icmp ne i32* %19, null
  br i1 %20, label %21, label %22

; <label>:21                                      ; preds = %8
  store i32 0, i32* %1
  br label %23

; <label>:22                                      ; preds = %8
  store i32 -1, i32* %1
  br label %23

; <label>:23                                      ; preds = %22, %21, %7
  %24 = load i32* %1
  ret i32 %24
}

; Function Attrs: nounwind ssp uwtable
define void @releaseList(%struct.arrayList* %list) #0 {
  %1 = alloca %struct.arrayList*, align 8
  store %struct.arrayList* %list, %struct.arrayList** %1, align 8
  %2 = load %struct.arrayList** %1, align 8
  %3 = getelementptr inbounds %struct.arrayList* %2, i32 0, i32 2
  %4 = load i32** %3, align 8
  %5 = icmp ne i32* %4, null
  br i1 %5, label %6, label %11

; <label>:6                                       ; preds = %0
  %7 = load %struct.arrayList** %1, align 8
  %8 = getelementptr inbounds %struct.arrayList* %7, i32 0, i32 2
  %9 = load i32** %8, align 8
  %10 = bitcast i32* %9 to i8*
  call void @free(i8* %10)
  br label %11

; <label>:11                                      ; preds = %6, %0
  %12 = load %struct.arrayList** %1, align 8
  %13 = getelementptr inbounds %struct.arrayList* %12, i32 0, i32 0
  store i32 0, i32* %13, align 4
  %14 = load %struct.arrayList** %1, align 8
  %15 = getelementptr inbounds %struct.arrayList* %14, i32 0, i32 1
  store i32 0, i32* %15, align 4
  %16 = load %struct.arrayList** %1, align 8
  %17 = getelementptr inbounds %struct.arrayList* %16, i32 0, i32 2
  store i32* null, i32** %17, align 8
  ret void
}

declare void @free(i8*) #1

; Function Attrs: nounwind ssp uwtable
define void @deleteList(%struct.arrayList* %list) #0 {
  %1 = alloca %struct.arrayList*, align 8
  store %struct.arrayList* %list, %struct.arrayList** %1, align 8
  %2 = load %struct.arrayList** %1, align 8
  %3 = icmp ne %struct.arrayList* %2, null
  br i1 %3, label %4, label %8

; <label>:4                                       ; preds = %0
  %5 = load %struct.arrayList** %1, align 8
  call void @releaseList(%struct.arrayList* %5)
  %6 = load %struct.arrayList** %1, align 8
  %7 = bitcast %struct.arrayList* %6 to i8*
  call void @free(i8* %7)
  br label %8

; <label>:8                                       ; preds = %4, %0
  ret void
}

; Function Attrs: nounwind ssp uwtable
define i32 @getDataFromList(%struct.arrayList* %list, i32 %index) #0 {
  %1 = alloca %struct.arrayList*, align 8
  %2 = alloca i32, align 4
  %rtn = alloca i32, align 4
  store %struct.arrayList* %list, %struct.arrayList** %1, align 8
  store i32 %index, i32* %2, align 4
  %3 = load i32* %2, align 4
  %4 = sext i32 %3 to i64
  %5 = load %struct.arrayList** %1, align 8
  %6 = getelementptr inbounds %struct.arrayList* %5, i32 0, i32 2
  %7 = load i32** %6, align 8
  %8 = getelementptr inbounds i32* %7, i64 %4
  %9 = load i32* %8, align 4
  store i32 %9, i32* %rtn, align 4
  %10 = load i32* %rtn, align 4
  ret i32 %10
}

; Function Attrs: nounwind ssp uwtable
define i32 @expandListToCapacity(%struct.arrayList* %list, i32 %target) #0 {
  %1 = alloca i32, align 4
  %2 = alloca %struct.arrayList*, align 8
  %3 = alloca i32, align 4
  %tmp = alloca i32*, align 8
  %t = alloca i32, align 4
  %tt = alloca i32, align 4
  store %struct.arrayList* %list, %struct.arrayList** %2, align 8
  store i32 %target, i32* %3, align 4
  store i32* null, i32** %tmp, align 8
  %4 = load i32* %3, align 4
  %5 = mul nsw i32 4, %4
  store i32 %5, i32* %t, align 4
  %6 = load %struct.arrayList** %2, align 8
  %7 = getelementptr inbounds %struct.arrayList* %6, i32 0, i32 1
  %8 = load i32* %7, align 4
  %9 = mul nsw i32 4, %8
  store i32 %9, i32* %tt, align 4
  %10 = load i32* %t, align 4
  %11 = sext i32 %10 to i64
  %12 = call i8* @malloc(i64 %11)
  %13 = bitcast i8* %12 to i32*
  store i32* %13, i32** %tmp, align 8
  %14 = load i32** %tmp, align 8
  %15 = icmp ne i32* %14, null
  br i1 %15, label %16, label %35

; <label>:16                                      ; preds = %0
  %17 = load i32** %tmp, align 8
  %18 = bitcast i32* %17 to i8*
  %19 = load %struct.arrayList** %2, align 8
  %20 = getelementptr inbounds %struct.arrayList* %19, i32 0, i32 2
  %21 = load i32** %20, align 8
  %22 = bitcast i32* %21 to i8*
  %23 = load i32* %tt, align 4
  %24 = sext i32 %23 to i64
  call void @llvm.memcpy.p0i8.p0i8.i64(i8* %18, i8* %22, i64 %24, i32 4, i1 false)
  %25 = load %struct.arrayList** %2, align 8
  %26 = getelementptr inbounds %struct.arrayList* %25, i32 0, i32 2
  %27 = load i32** %26, align 8
  %28 = bitcast i32* %27 to i8*
  call void @free(i8* %28)
  %29 = load i32** %tmp, align 8
  %30 = load %struct.arrayList** %2, align 8
  %31 = getelementptr inbounds %struct.arrayList* %30, i32 0, i32 2
  store i32* %29, i32** %31, align 8
  %32 = load i32* %3, align 4
  %33 = load %struct.arrayList** %2, align 8
  %34 = getelementptr inbounds %struct.arrayList* %33, i32 0, i32 0
  store i32 %32, i32* %34, align 4
  store i32 1, i32* %1
  br label %36

; <label>:35                                      ; preds = %0
  store i32 0, i32* %1
  br label %36

; <label>:36                                      ; preds = %35, %16
  %37 = load i32* %1
  ret i32 %37
}

; Function Attrs: nounwind
declare void @llvm.memcpy.p0i8.p0i8.i64(i8* nocapture, i8* nocapture readonly, i64, i32, i1) #2

; Function Attrs: nounwind ssp uwtable
define i32 @expandList(%struct.arrayList* %list) #0 {
  %1 = alloca i32, align 4
  %2 = alloca %struct.arrayList*, align 8
  %target = alloca i32, align 4
  %delta = alloca i32, align 4
  %t = alloca i32, align 4
  store %struct.arrayList* %list, %struct.arrayList** %2, align 8
  %3 = load %struct.arrayList** %2, align 8
  %4 = getelementptr inbounds %struct.arrayList* %3, i32 0, i32 0
  %5 = load i32* %4, align 4
  store i32 %5, i32* %delta, align 4
  store i32 0, i32* %target, align 4
  br label %6

; <label>:6                                       ; preds = %0, %33
  %7 = load i32* %delta, align 4
  %8 = icmp sle i32 %7, 0
  br i1 %8, label %9, label %10

; <label>:9                                       ; preds = %6
  store i32 0, i32* %1
  br label %34

; <label>:10                                      ; preds = %6
  %11 = load %struct.arrayList** %2, align 8
  %12 = getelementptr inbounds %struct.arrayList* %11, i32 0, i32 0
  %13 = load i32* %12, align 4
  %14 = load i32* %delta, align 4
  %15 = add nsw i32 %13, %14
  store i32 %15, i32* %target, align 4
  %16 = load i32* %target, align 4
  %17 = icmp slt i32 %16, 0
  br i1 %17, label %18, label %21

; <label>:18                                      ; preds = %10
  %19 = load i32* %delta, align 4
  %20 = sdiv i32 %19, 2
  store i32 %20, i32* %delta, align 4
  br label %33

; <label>:21                                      ; preds = %10
  %22 = load %struct.arrayList** %2, align 8
  %23 = load i32* %target, align 4
  %24 = call i32 @expandListToCapacity(%struct.arrayList* %22, i32 %23)
  store i32 %24, i32* %t, align 4
  %25 = load i32* %t, align 4
  %26 = icmp eq i32 %25, 1
  br i1 %26, label %27, label %29

; <label>:27                                      ; preds = %21
  %28 = load i32* %delta, align 4
  store i32 %28, i32* %1
  br label %34

; <label>:29                                      ; preds = %21
  %30 = load i32* %delta, align 4
  %31 = sdiv i32 %30, 2
  store i32 %31, i32* %delta, align 4
  br label %32

; <label>:32                                      ; preds = %29
  br label %33

; <label>:33                                      ; preds = %32, %18
  br label %6

; <label>:34                                      ; preds = %27, %9
  %35 = load i32* %1
  ret i32 %35
}

; Function Attrs: nounwind ssp uwtable
define i32 @insertToList(%struct.arrayList* %list, i32 %val, i32 %index) #0 {
  %1 = alloca %struct.arrayList*, align 8
  %2 = alloca i32, align 4
  %3 = alloca i32, align 4
  %i = alloca i32, align 4
  store %struct.arrayList* %list, %struct.arrayList** %1, align 8
  store i32 %val, i32* %2, align 4
  store i32 %index, i32* %3, align 4
  %4 = load %struct.arrayList** %1, align 8
  %5 = getelementptr inbounds %struct.arrayList* %4, i32 0, i32 1
  %6 = load i32* %5, align 4
  store i32 %6, i32* %i, align 4
  br label %7

; <label>:7                                       ; preds = %26, %0
  %8 = load i32* %i, align 4
  %9 = load i32* %3, align 4
  %10 = icmp sgt i32 %8, %9
  br i1 %10, label %11, label %29

; <label>:11                                      ; preds = %7
  %12 = load i32* %i, align 4
  %13 = sub nsw i32 %12, 1
  %14 = sext i32 %13 to i64
  %15 = load %struct.arrayList** %1, align 8
  %16 = getelementptr inbounds %struct.arrayList* %15, i32 0, i32 2
  %17 = load i32** %16, align 8
  %18 = getelementptr inbounds i32* %17, i64 %14
  %19 = load i32* %18, align 4
  %20 = load i32* %i, align 4
  %21 = sext i32 %20 to i64
  %22 = load %struct.arrayList** %1, align 8
  %23 = getelementptr inbounds %struct.arrayList* %22, i32 0, i32 2
  %24 = load i32** %23, align 8
  %25 = getelementptr inbounds i32* %24, i64 %21
  store i32 %19, i32* %25, align 4
  br label %26

; <label>:26                                      ; preds = %11
  %27 = load i32* %i, align 4
  %28 = add nsw i32 %27, -1
  store i32 %28, i32* %i, align 4
  br label %7

; <label>:29                                      ; preds = %7
  %30 = load i32* %2, align 4
  %31 = load i32* %3, align 4
  %32 = sext i32 %31 to i64
  %33 = load %struct.arrayList** %1, align 8
  %34 = getelementptr inbounds %struct.arrayList* %33, i32 0, i32 2
  %35 = load i32** %34, align 8
  %36 = getelementptr inbounds i32* %35, i64 %32
  store i32 %30, i32* %36, align 4
  %37 = load %struct.arrayList** %1, align 8
  %38 = getelementptr inbounds %struct.arrayList* %37, i32 0, i32 1
  %39 = load i32* %38, align 4
  %40 = add nsw i32 %39, 1
  store i32 %40, i32* %38, align 4
  ret i32 0
}

; Function Attrs: nounwind ssp uwtable
define i32 @removeFromListByIndex(%struct.arrayList* %list, i32 %index) #0 {
  %1 = alloca %struct.arrayList*, align 8
  %2 = alloca i32, align 4
  %i = alloca i32, align 4
  store %struct.arrayList* %list, %struct.arrayList** %1, align 8
  store i32 %index, i32* %2, align 4
  %3 = load i32* %2, align 4
  store i32 %3, i32* %i, align 4
  br label %4

; <label>:4                                       ; preds = %26, %0
  %5 = load i32* %i, align 4
  %6 = load %struct.arrayList** %1, align 8
  %7 = getelementptr inbounds %struct.arrayList* %6, i32 0, i32 1
  %8 = load i32* %7, align 4
  %9 = sub nsw i32 %8, 1
  %10 = icmp slt i32 %5, %9
  br i1 %10, label %11, label %29

; <label>:11                                      ; preds = %4
  %12 = load i32* %i, align 4
  %13 = add nsw i32 %12, 1
  %14 = sext i32 %13 to i64
  %15 = load %struct.arrayList** %1, align 8
  %16 = getelementptr inbounds %struct.arrayList* %15, i32 0, i32 2
  %17 = load i32** %16, align 8
  %18 = getelementptr inbounds i32* %17, i64 %14
  %19 = load i32* %18, align 4
  %20 = load i32* %i, align 4
  %21 = sext i32 %20 to i64
  %22 = load %struct.arrayList** %1, align 8
  %23 = getelementptr inbounds %struct.arrayList* %22, i32 0, i32 2
  %24 = load i32** %23, align 8
  %25 = getelementptr inbounds i32* %24, i64 %21
  store i32 %19, i32* %25, align 4
  br label %26

; <label>:26                                      ; preds = %11
  %27 = load i32* %i, align 4
  %28 = add nsw i32 %27, 1
  store i32 %28, i32* %i, align 4
  br label %4

; <label>:29                                      ; preds = %4
  %30 = load %struct.arrayList** %1, align 8
  %31 = getelementptr inbounds %struct.arrayList* %30, i32 0, i32 1
  %32 = load i32* %31, align 4
  %33 = add nsw i32 %32, -1
  store i32 %33, i32* %31, align 4
  ret i32 0
}

; Function Attrs: nounwind ssp uwtable
define i32 @getIndexFromList(%struct.arrayList* %list, i32 %val) #0 {
  %1 = alloca i32, align 4
  %2 = alloca %struct.arrayList*, align 8
  %3 = alloca i32, align 4
  %i = alloca i32, align 4
  store %struct.arrayList* %list, %struct.arrayList** %2, align 8
  store i32 %val, i32* %3, align 4
  store i32 0, i32* %i, align 4
  br label %4

; <label>:4                                       ; preds = %23, %0
  %5 = load i32* %i, align 4
  %6 = load %struct.arrayList** %2, align 8
  %7 = getelementptr inbounds %struct.arrayList* %6, i32 0, i32 1
  %8 = load i32* %7, align 4
  %9 = icmp slt i32 %5, %8
  br i1 %9, label %10, label %26

; <label>:10                                      ; preds = %4
  %11 = load i32* %i, align 4
  %12 = sext i32 %11 to i64
  %13 = load %struct.arrayList** %2, align 8
  %14 = getelementptr inbounds %struct.arrayList* %13, i32 0, i32 2
  %15 = load i32** %14, align 8
  %16 = getelementptr inbounds i32* %15, i64 %12
  %17 = load i32* %16, align 4
  %18 = load i32* %3, align 4
  %19 = icmp eq i32 %17, %18
  br i1 %19, label %20, label %22

; <label>:20                                      ; preds = %10
  %21 = load i32* %i, align 4
  store i32 %21, i32* %1
  br label %27

; <label>:22                                      ; preds = %10
  br label %23

; <label>:23                                      ; preds = %22
  %24 = load i32* %i, align 4
  %25 = add nsw i32 %24, 1
  store i32 %25, i32* %i, align 4
  br label %4

; <label>:26                                      ; preds = %4
  store i32 -1, i32* %1
  br label %27

; <label>:27                                      ; preds = %26, %20
  %28 = load i32* %1
  ret i32 %28
}

; Function Attrs: nounwind ssp uwtable
define i32 @removeFromListByValue(%struct.arrayList* %list, i32 %val) #0 {
  %1 = alloca %struct.arrayList*, align 8
  %2 = alloca i32, align 4
  %index = alloca i32, align 4
  %rtn = alloca i32, align 4
  store %struct.arrayList* %list, %struct.arrayList** %1, align 8
  store i32 %val, i32* %2, align 4
  %3 = load %struct.arrayList** %1, align 8
  %4 = load i32* %2, align 4
  %5 = call i32 @getIndexFromList(%struct.arrayList* %3, i32 %4)
  store i32 %5, i32* %index, align 4
  %6 = load %struct.arrayList** %1, align 8
  %7 = load i32* %index, align 4
  %8 = call i32 @removeFromListByIndex(%struct.arrayList* %6, i32 %7)
  store i32 %8, i32* %rtn, align 4
  %9 = load i32* %rtn, align 4
  ret i32 %9
}

; Function Attrs: nounwind ssp uwtable
define %struct.arrayList* @sortList(%struct.arrayList* %list, i32 %l, i32 %r) #0 {
  %1 = alloca %struct.arrayList*, align 8
  %2 = alloca i32, align 4
  %3 = alloca i32, align 4
  %i = alloca i32, align 4
  %j = alloca i32, align 4
  %tt = alloca i32, align 4
  %t = alloca i32, align 4
  %m = alloca i32, align 4
  store %struct.arrayList* %list, %struct.arrayList** %1, align 8
  store i32 %l, i32* %2, align 4
  store i32 %r, i32* %3, align 4
  %4 = load i32* %2, align 4
  %5 = load i32* %3, align 4
  %6 = add nsw i32 %4, %5
  store i32 %6, i32* %tt, align 4
  %7 = load i32* %tt, align 4
  %8 = sdiv i32 %7, 2
  store i32 %8, i32* %tt, align 4
  %9 = load i32* %2, align 4
  store i32 %9, i32* %i, align 4
  %10 = load i32* %3, align 4
  store i32 %10, i32* %j, align 4
  %11 = load i32* %tt, align 4
  %12 = sext i32 %11 to i64
  %13 = load %struct.arrayList** %1, align 8
  %14 = getelementptr inbounds %struct.arrayList* %13, i32 0, i32 2
  %15 = load i32** %14, align 8
  %16 = getelementptr inbounds i32* %15, i64 %12
  %17 = load i32* %16, align 4
  store i32 %17, i32* %m, align 4
  br label %18

; <label>:18                                      ; preds = %86, %0
  %19 = load i32* %i, align 4
  %20 = load i32* %j, align 4
  %21 = icmp sle i32 %19, %20
  br i1 %21, label %22, label %87

; <label>:22                                      ; preds = %18
  br label %23

; <label>:23                                      ; preds = %33, %22
  %24 = load i32* %i, align 4
  %25 = sext i32 %24 to i64
  %26 = load %struct.arrayList** %1, align 8
  %27 = getelementptr inbounds %struct.arrayList* %26, i32 0, i32 2
  %28 = load i32** %27, align 8
  %29 = getelementptr inbounds i32* %28, i64 %25
  %30 = load i32* %29, align 4
  %31 = load i32* %m, align 4
  %32 = icmp slt i32 %30, %31
  br i1 %32, label %33, label %36

; <label>:33                                      ; preds = %23
  %34 = load i32* %i, align 4
  %35 = add nsw i32 %34, 1
  store i32 %35, i32* %i, align 4
  br label %23

; <label>:36                                      ; preds = %23
  br label %37

; <label>:37                                      ; preds = %47, %36
  %38 = load i32* %j, align 4
  %39 = sext i32 %38 to i64
  %40 = load %struct.arrayList** %1, align 8
  %41 = getelementptr inbounds %struct.arrayList* %40, i32 0, i32 2
  %42 = load i32** %41, align 8
  %43 = getelementptr inbounds i32* %42, i64 %39
  %44 = load i32* %43, align 4
  %45 = load i32* %m, align 4
  %46 = icmp sgt i32 %44, %45
  br i1 %46, label %47, label %50

; <label>:47                                      ; preds = %37
  %48 = load i32* %j, align 4
  %49 = add nsw i32 %48, -1
  store i32 %49, i32* %j, align 4
  br label %37

; <label>:50                                      ; preds = %37
  %51 = load i32* %i, align 4
  %52 = load i32* %j, align 4
  %53 = icmp sle i32 %51, %52
  br i1 %53, label %54, label %86

; <label>:54                                      ; preds = %50
  %55 = load i32* %i, align 4
  %56 = sext i32 %55 to i64
  %57 = load %struct.arrayList** %1, align 8
  %58 = getelementptr inbounds %struct.arrayList* %57, i32 0, i32 2
  %59 = load i32** %58, align 8
  %60 = getelementptr inbounds i32* %59, i64 %56
  %61 = load i32* %60, align 4
  store i32 %61, i32* %t, align 4
  %62 = load i32* %j, align 4
  %63 = sext i32 %62 to i64
  %64 = load %struct.arrayList** %1, align 8
  %65 = getelementptr inbounds %struct.arrayList* %64, i32 0, i32 2
  %66 = load i32** %65, align 8
  %67 = getelementptr inbounds i32* %66, i64 %63
  %68 = load i32* %67, align 4
  %69 = load i32* %i, align 4
  %70 = sext i32 %69 to i64
  %71 = load %struct.arrayList** %1, align 8
  %72 = getelementptr inbounds %struct.arrayList* %71, i32 0, i32 2
  %73 = load i32** %72, align 8
  %74 = getelementptr inbounds i32* %73, i64 %70
  store i32 %68, i32* %74, align 4
  %75 = load i32* %t, align 4
  %76 = load i32* %j, align 4
  %77 = sext i32 %76 to i64
  %78 = load %struct.arrayList** %1, align 8
  %79 = getelementptr inbounds %struct.arrayList* %78, i32 0, i32 2
  %80 = load i32** %79, align 8
  %81 = getelementptr inbounds i32* %80, i64 %77
  store i32 %75, i32* %81, align 4
  %82 = load i32* %i, align 4
  %83 = add nsw i32 %82, 1
  store i32 %83, i32* %i, align 4
  %84 = load i32* %j, align 4
  %85 = add nsw i32 %84, -1
  store i32 %85, i32* %j, align 4
  br label %86

; <label>:86                                      ; preds = %54, %50
  br label %18

; <label>:87                                      ; preds = %18
  %88 = load i32* %2, align 4
  %89 = load i32* %j, align 4
  %90 = icmp slt i32 %88, %89
  br i1 %90, label %91, label %96

; <label>:91                                      ; preds = %87
  %92 = load %struct.arrayList** %1, align 8
  %93 = load i32* %2, align 4
  %94 = load i32* %j, align 4
  %95 = call %struct.arrayList* @sortList(%struct.arrayList* %92, i32 %93, i32 %94)
  br label %96

; <label>:96                                      ; preds = %91, %87
  %97 = load i32* %i, align 4
  %98 = load i32* %3, align 4
  %99 = icmp slt i32 %97, %98
  br i1 %99, label %100, label %105

; <label>:100                                     ; preds = %96
  %101 = load %struct.arrayList** %1, align 8
  %102 = load i32* %i, align 4
  %103 = load i32* %3, align 4
  %104 = call %struct.arrayList* @sortList(%struct.arrayList* %101, i32 %102, i32 %103)
  br label %105

; <label>:105                                     ; preds = %100, %96
  %106 = load %struct.arrayList** %1, align 8
  ret %struct.arrayList* %106
}

; Function Attrs: nounwind ssp uwtable
define void @printLog(i8* %hint, i8* %params, i32 %rtn) #0 {
  %1 = alloca i8*, align 8
  %2 = alloca i8*, align 8
  %3 = alloca i32, align 4
  store i8* %hint, i8** %1, align 8
  store i8* %params, i8** %2, align 8
  store i32 %rtn, i32* %3, align 4
  %4 = load i8** %1, align 8
  %5 = load i8** %2, align 8
  %6 = load i32* %3, align 4
  %7 = call i32 (i8*, ...)* @printf(i8* getelementptr inbounds ([40 x i8]* @.str, i32 0, i32 0), i8* %4, i8* %5, i32 %6)
  ret void
}

declare i32 @printf(i8*, ...) #1

; Function Attrs: nounwind ssp uwtable
define i32 @main() #0 {
  %1 = alloca i32, align 4
  %list1 = alloca %struct.arrayList*, align 8
  %list2 = alloca %struct.arrayList*, align 8
  %t = alloca i32, align 4
  %i = alloca i32, align 4
  store i32 0, i32* %1
  %2 = call i32 (i8*, ...)* @printf(i8* getelementptr inbounds ([24 x i8]* @.str1, i32 0, i32 0))
  %3 = call %struct.arrayList* @createList()
  store %struct.arrayList* %3, %struct.arrayList** %list1, align 8
  %4 = load %struct.arrayList** %list1, align 8
  %5 = ptrtoint %struct.arrayList* %4 to i32
  call void @printLog(i8* getelementptr inbounds ([21 x i8]* @.str2, i32 0, i32 0), i8* getelementptr inbounds ([8 x i8]* @.str3, i32 0, i32 0), i32 %5)
  %6 = load %struct.arrayList** %list1, align 8
  %7 = call i32 @initList(%struct.arrayList* %6)
  call void @printLog(i8* getelementptr inbounds ([26 x i8]* @.str4, i32 0, i32 0), i8* getelementptr inbounds ([13 x i8]* @.str5, i32 0, i32 0), i32 %7)
  %8 = call %struct.arrayList* @createList()
  store %struct.arrayList* %8, %struct.arrayList** %list2, align 8
  %9 = load %struct.arrayList** %list2, align 8
  %10 = ptrtoint %struct.arrayList* %9 to i32
  call void @printLog(i8* getelementptr inbounds ([21 x i8]* @.str2, i32 0, i32 0), i8* getelementptr inbounds ([8 x i8]* @.str3, i32 0, i32 0), i32 %10)
  %11 = load %struct.arrayList** %list2, align 8
  %12 = call i32 @initList(%struct.arrayList* %11)
  call void @printLog(i8* getelementptr inbounds ([26 x i8]* @.str4, i32 0, i32 0), i8* getelementptr inbounds ([13 x i8]* @.str6, i32 0, i32 0), i32 %12)
  %13 = load %struct.arrayList** %list1, align 8
  %14 = call i32 @insertToList(%struct.arrayList* %13, i32 5, i32 0)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str8, i32 0, i32 0), i32 %14)
  %15 = load %struct.arrayList** %list1, align 8
  %16 = call i32 @insertToList(%struct.arrayList* %15, i32 2, i32 1)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str9, i32 0, i32 0), i32 %16)
  %17 = load %struct.arrayList** %list1, align 8
  %18 = call i32 @insertToList(%struct.arrayList* %17, i32 8, i32 2)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str10, i32 0, i32 0), i32 %18)
  %19 = load %struct.arrayList** %list1, align 8
  %20 = call i32 @insertToList(%struct.arrayList* %19, i32 9, i32 3)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str11, i32 0, i32 0), i32 %20)
  %21 = load %struct.arrayList** %list1, align 8
  %22 = call i32 @removeFromListByValue(%struct.arrayList* %21, i32 9)
  call void @printLog(i8* getelementptr inbounds ([35 x i8]* @.str12, i32 0, i32 0), i8* getelementptr inbounds ([21 x i8]* @.str13, i32 0, i32 0), i32 %22)
  %23 = load %struct.arrayList** %list1, align 8
  %24 = call i32 @insertToList(%struct.arrayList* %23, i32 0, i32 3)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str14, i32 0, i32 0), i32 %24)
  %25 = load %struct.arrayList** %list1, align 8
  %26 = call i32 @insertToList(%struct.arrayList* %25, i32 6, i32 4)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str15, i32 0, i32 0), i32 %26)
  %27 = load %struct.arrayList** %list2, align 8
  %28 = call i32 @insertToList(%struct.arrayList* %27, i32 7, i32 0)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str16, i32 0, i32 0), i32 %28)
  %29 = load %struct.arrayList** %list2, align 8
  %30 = call i32 @insertToList(%struct.arrayList* %29, i32 0, i32 0)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str17, i32 0, i32 0), i32 %30)
  %31 = load %struct.arrayList** %list2, align 8
  %32 = call i32 @insertToList(%struct.arrayList* %31, i32 9, i32 0)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str18, i32 0, i32 0), i32 %32)
  %33 = load %struct.arrayList** %list2, align 8
  %34 = call i32 @insertToList(%struct.arrayList* %33, i32 2, i32 0)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str19, i32 0, i32 0), i32 %34)
  %35 = load %struct.arrayList** %list2, align 8
  %36 = call i32 @insertToList(%struct.arrayList* %35, i32 4, i32 0)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str20, i32 0, i32 0), i32 %36)
  %37 = load %struct.arrayList** %list1, align 8
  %38 = getelementptr inbounds %struct.arrayList* %37, i32 0, i32 1
  %39 = load i32* %38, align 4
  %40 = sub nsw i32 %39, 1
  store i32 %40, i32* %t, align 4
  %41 = load %struct.arrayList** %list1, align 8
  %42 = load i32* %t, align 4
  %43 = call %struct.arrayList* @sortList(%struct.arrayList* %41, i32 0, i32 %42)
  %44 = load %struct.arrayList** %list1, align 8
  %45 = ptrtoint %struct.arrayList* %44 to i32
  call void @printLog(i8* getelementptr inbounds ([29 x i8]* @.str21, i32 0, i32 0), i8* getelementptr inbounds ([13 x i8]* @.str22, i32 0, i32 0), i32 %45)
  %46 = call i32 (i8*, ...)* @printf(i8* getelementptr inbounds ([14 x i8]* @.str23, i32 0, i32 0))
  store i32 0, i32* %i, align 4
  br label %47

; <label>:47                                      ; preds = %62, %0
  %48 = load i32* %i, align 4
  %49 = load %struct.arrayList** %list1, align 8
  %50 = getelementptr inbounds %struct.arrayList* %49, i32 0, i32 1
  %51 = load i32* %50, align 4
  %52 = icmp slt i32 %48, %51
  br i1 %52, label %53, label %65

; <label>:53                                      ; preds = %47
  %54 = load i32* %i, align 4
  %55 = sext i32 %54 to i64
  %56 = load %struct.arrayList** %list1, align 8
  %57 = getelementptr inbounds %struct.arrayList* %56, i32 0, i32 2
  %58 = load i32** %57, align 8
  %59 = getelementptr inbounds i32* %58, i64 %55
  %60 = load i32* %59, align 4
  %61 = call i32 (i8*, ...)* @printf(i8* getelementptr inbounds ([4 x i8]* @.str24, i32 0, i32 0), i32 %60)
  br label %62

; <label>:62                                      ; preds = %53
  %63 = load i32* %i, align 4
  %64 = add nsw i32 %63, 1
  store i32 %64, i32* %i, align 4
  br label %47

; <label>:65                                      ; preds = %47
  %66 = call i32 (i8*, ...)* @printf(i8* getelementptr inbounds ([3 x i8]* @.str25, i32 0, i32 0))
  %67 = load %struct.arrayList** %list1, align 8
  call void @deleteList(%struct.arrayList* %67)
  call void @printLog(i8* getelementptr inbounds ([22 x i8]* @.str26, i32 0, i32 0), i8* getelementptr inbounds ([6 x i8]* @.str27, i32 0, i32 0), i32 0)
  %68 = load %struct.arrayList** %list2, align 8
  call void @deleteList(%struct.arrayList* %68)
  call void @printLog(i8* getelementptr inbounds ([22 x i8]* @.str26, i32 0, i32 0), i8* getelementptr inbounds ([6 x i8]* @.str28, i32 0, i32 0), i32 0)
  ret i32 0
}

attributes #0 = { nounwind ssp uwtable "less-precise-fpmad"="false" "no-frame-pointer-elim"="true" "no-frame-pointer-elim-non-leaf" "no-infs-fp-math"="false" "no-nans-fp-math"="false" "stack-protector-buffer-size"="8" "unsafe-fp-math"="false" "use-soft-float"="false" }
attributes #1 = { "less-precise-fpmad"="false" "no-frame-pointer-elim"="true" "no-frame-pointer-elim-non-leaf" "no-infs-fp-math"="false" "no-nans-fp-math"="false" "stack-protector-buffer-size"="8" "unsafe-fp-math"="false" "use-soft-float"="false" }
attributes #2 = { nounwind }

!llvm.ident = !{!0}

!0 = metadata !{metadata !"Apple LLVM version 5.1 (clang-503.0.40) (based on LLVM 3.4svn)"}
