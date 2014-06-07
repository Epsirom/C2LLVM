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
@.str21 = private unnamed_addr constant [28 x i8] c"Combine the two ArrayLists.\00", align 1
@.str22 = private unnamed_addr constant [21 x i8] c"list1.combine(list2)\00", align 1
@.str23 = private unnamed_addr constant [29 x i8] c"Sort the combined ArrayList.\00", align 1
@.str24 = private unnamed_addr constant [13 x i8] c"list1.sort()\00", align 1
@.str25 = private unnamed_addr constant [14 x i8] c"Sorted list1:\00", align 1
@.str26 = private unnamed_addr constant [4 x i8] c" %d\00", align 1
@.str27 = private unnamed_addr constant [2 x i8] c"\0A\00", align 1
@.str28 = private unnamed_addr constant [22 x i8] c"Delete the ArrayList.\00", align 1
@.str29 = private unnamed_addr constant [6 x i8] c"list1\00", align 1
@.str30 = private unnamed_addr constant [6 x i8] c"list2\00", align 1

; Function Attrs: nounwind ssp uwtable
define %struct.arrayList* @createList() #0 {
  %result = alloca %struct.arrayList*, align 8
  store %struct.arrayList* null, %struct.arrayList** %result, align 8
  %1 = call i8* @malloc(i64 16)
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
  store %struct.arrayList* %list, %struct.arrayList** %1, align 8
  store i32 %index, i32* %2, align 4
  %3 = load i32* %2, align 4
  %4 = sext i32 %3 to i64
  %5 = load %struct.arrayList** %1, align 8
  %6 = getelementptr inbounds %struct.arrayList* %5, i32 0, i32 2
  %7 = load i32** %6, align 8
  %8 = getelementptr inbounds i32* %7, i64 %4
  %9 = load i32* %8, align 4
  ret i32 %9
}

; Function Attrs: nounwind ssp uwtable
define i32 @expandListToCapacity(%struct.arrayList* %list, i32 %target) #0 {
  %1 = alloca i32, align 4
  %2 = alloca %struct.arrayList*, align 8
  %3 = alloca i32, align 4
  %tmp = alloca i32*, align 8
  store %struct.arrayList* %list, %struct.arrayList** %2, align 8
  store i32 %target, i32* %3, align 4
  store i32* null, i32** %tmp, align 8
  %4 = load i32* %3, align 4
  %5 = sext i32 %4 to i64
  %6 = mul i64 4, %5
  %7 = call i8* @malloc(i64 %6)
  %8 = bitcast i8* %7 to i32*
  store i32* %8, i32** %tmp, align 8
  %9 = load i32** %tmp, align 8
  %10 = icmp ne i32* %9, null
  br i1 %10, label %11, label %33

; <label>:11                                      ; preds = %0
  %12 = load i32** %tmp, align 8
  %13 = bitcast i32* %12 to i8*
  %14 = load %struct.arrayList** %2, align 8
  %15 = getelementptr inbounds %struct.arrayList* %14, i32 0, i32 2
  %16 = load i32** %15, align 8
  %17 = bitcast i32* %16 to i8*
  %18 = load %struct.arrayList** %2, align 8
  %19 = getelementptr inbounds %struct.arrayList* %18, i32 0, i32 1
  %20 = load i32* %19, align 4
  %21 = sext i32 %20 to i64
  %22 = mul i64 4, %21
  call void @llvm.memcpy.p0i8.p0i8.i64(i8* %13, i8* %17, i64 %22, i32 4, i1 false)
  %23 = load %struct.arrayList** %2, align 8
  %24 = getelementptr inbounds %struct.arrayList* %23, i32 0, i32 2
  %25 = load i32** %24, align 8
  %26 = bitcast i32* %25 to i8*
  call void @free(i8* %26)
  %27 = load i32** %tmp, align 8
  %28 = load %struct.arrayList** %2, align 8
  %29 = getelementptr inbounds %struct.arrayList* %28, i32 0, i32 2
  store i32* %27, i32** %29, align 8
  %30 = load i32* %3, align 4
  %31 = load %struct.arrayList** %2, align 8
  %32 = getelementptr inbounds %struct.arrayList* %31, i32 0, i32 0
  store i32 %30, i32* %32, align 4
  store i32 1, i32* %1
  br label %34

; <label>:33                                      ; preds = %0
  store i32 0, i32* %1
  br label %34

; <label>:34                                      ; preds = %33, %11
  %35 = load i32* %1
  ret i32 %35
}

; Function Attrs: nounwind
declare void @llvm.memcpy.p0i8.p0i8.i64(i8* nocapture, i8* nocapture readonly, i64, i32, i1) #2

; Function Attrs: nounwind ssp uwtable
define i32 @expandList(%struct.arrayList* %list) #0 {
  %1 = alloca i32, align 4
  %2 = alloca %struct.arrayList*, align 8
  %target = alloca i32, align 4
  %delta = alloca i32, align 4
  store %struct.arrayList* %list, %struct.arrayList** %2, align 8
  store i32 0, i32* %target, align 4
  %3 = load %struct.arrayList** %2, align 8
  %4 = getelementptr inbounds %struct.arrayList* %3, i32 0, i32 0
  %5 = load i32* %4, align 4
  store i32 %5, i32* %delta, align 4
  br label %6

; <label>:6                                       ; preds = %0, %18, %28
  %7 = load i32* %delta, align 4
  %8 = icmp sle i32 %7, 0
  br i1 %8, label %9, label %10

; <label>:9                                       ; preds = %6
  store i32 0, i32* %1
  br label %31

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
  %20 = ashr i32 %19, 1
  store i32 %20, i32* %delta, align 4
  br label %6

; <label>:21                                      ; preds = %10
  %22 = load %struct.arrayList** %2, align 8
  %23 = load i32* %target, align 4
  %24 = call i32 @expandListToCapacity(%struct.arrayList* %22, i32 %23)
  %25 = icmp ne i32 %24, 0
  br i1 %25, label %26, label %28

; <label>:26                                      ; preds = %21
  %27 = load i32* %delta, align 4
  store i32 %27, i32* %1
  br label %31

; <label>:28                                      ; preds = %21
  %29 = load i32* %delta, align 4
  %30 = ashr i32 %29, 1
  store i32 %30, i32* %delta, align 4
  br label %6

; <label>:31                                      ; preds = %26, %9
  %32 = load i32* %1
  ret i32 %32
}

; Function Attrs: nounwind ssp uwtable
define i32 @insertToList(%struct.arrayList* %list, i32 %val, i32 %index) #0 {
  %1 = alloca i32, align 4
  %2 = alloca %struct.arrayList*, align 8
  %3 = alloca i32, align 4
  %4 = alloca i32, align 4
  %i = alloca i32, align 4
  store %struct.arrayList* %list, %struct.arrayList** %2, align 8
  store i32 %val, i32* %3, align 4
  store i32 %index, i32* %4, align 4
  %5 = load i32* %4, align 4
  %6 = load %struct.arrayList** %2, align 8
  %7 = getelementptr inbounds %struct.arrayList* %6, i32 0, i32 1
  %8 = load i32* %7, align 4
  %9 = icmp sgt i32 %5, %8
  br i1 %9, label %13, label %10

; <label>:10                                      ; preds = %0
  %11 = load i32* %4, align 4
  %12 = icmp slt i32 %11, 0
  br i1 %12, label %13, label %14

; <label>:13                                      ; preds = %10, %0
  store i32 -2, i32* %1
  br label %66

; <label>:14                                      ; preds = %10
  %15 = load %struct.arrayList** %2, align 8
  %16 = getelementptr inbounds %struct.arrayList* %15, i32 0, i32 1
  %17 = load i32* %16, align 4
  %18 = load %struct.arrayList** %2, align 8
  %19 = getelementptr inbounds %struct.arrayList* %18, i32 0, i32 0
  %20 = load i32* %19, align 4
  %21 = icmp sge i32 %17, %20
  br i1 %21, label %22, label %28

; <label>:22                                      ; preds = %14
  %23 = load %struct.arrayList** %2, align 8
  %24 = call i32 @expandList(%struct.arrayList* %23)
  %25 = icmp ne i32 %24, 0
  br i1 %25, label %27, label %26

; <label>:26                                      ; preds = %22
  store i32 -1, i32* %1
  br label %66

; <label>:27                                      ; preds = %22
  br label %28

; <label>:28                                      ; preds = %27, %14
  %29 = load %struct.arrayList** %2, align 8
  %30 = getelementptr inbounds %struct.arrayList* %29, i32 0, i32 1
  %31 = load i32* %30, align 4
  store i32 %31, i32* %i, align 4
  br label %32

; <label>:32                                      ; preds = %51, %28
  %33 = load i32* %i, align 4
  %34 = load i32* %4, align 4
  %35 = icmp sgt i32 %33, %34
  br i1 %35, label %36, label %54

; <label>:36                                      ; preds = %32
  %37 = load i32* %i, align 4
  %38 = sub nsw i32 %37, 1
  %39 = sext i32 %38 to i64
  %40 = load %struct.arrayList** %2, align 8
  %41 = getelementptr inbounds %struct.arrayList* %40, i32 0, i32 2
  %42 = load i32** %41, align 8
  %43 = getelementptr inbounds i32* %42, i64 %39
  %44 = load i32* %43, align 4
  %45 = load i32* %i, align 4
  %46 = sext i32 %45 to i64
  %47 = load %struct.arrayList** %2, align 8
  %48 = getelementptr inbounds %struct.arrayList* %47, i32 0, i32 2
  %49 = load i32** %48, align 8
  %50 = getelementptr inbounds i32* %49, i64 %46
  store i32 %44, i32* %50, align 4
  br label %51

; <label>:51                                      ; preds = %36
  %52 = load i32* %i, align 4
  %53 = add nsw i32 %52, -1
  store i32 %53, i32* %i, align 4
  br label %32

; <label>:54                                      ; preds = %32
  %55 = load i32* %3, align 4
  %56 = load i32* %4, align 4
  %57 = sext i32 %56 to i64
  %58 = load %struct.arrayList** %2, align 8
  %59 = getelementptr inbounds %struct.arrayList* %58, i32 0, i32 2
  %60 = load i32** %59, align 8
  %61 = getelementptr inbounds i32* %60, i64 %57
  store i32 %55, i32* %61, align 4
  %62 = load %struct.arrayList** %2, align 8
  %63 = getelementptr inbounds %struct.arrayList* %62, i32 0, i32 1
  %64 = load i32* %63, align 4
  %65 = add nsw i32 %64, 1
  store i32 %65, i32* %63, align 4
  store i32 0, i32* %1
  br label %66

; <label>:66                                      ; preds = %54, %26, %13
  %67 = load i32* %1
  ret i32 %67
}

; Function Attrs: nounwind ssp uwtable
define i32 @removeFromListByIndex(%struct.arrayList* %list, i32 %index) #0 {
  %1 = alloca i32, align 4
  %2 = alloca %struct.arrayList*, align 8
  %3 = alloca i32, align 4
  %i = alloca i32, align 4
  store %struct.arrayList* %list, %struct.arrayList** %2, align 8
  store i32 %index, i32* %3, align 4
  %4 = load i32* %3, align 4
  %5 = load %struct.arrayList** %2, align 8
  %6 = getelementptr inbounds %struct.arrayList* %5, i32 0, i32 1
  %7 = load i32* %6, align 4
  %8 = icmp sge i32 %4, %7
  br i1 %8, label %12, label %9

; <label>:9                                       ; preds = %0
  %10 = load i32* %3, align 4
  %11 = icmp slt i32 %10, 0
  br i1 %11, label %12, label %13

; <label>:12                                      ; preds = %9, %0
  store i32 -2, i32* %1
  br label %45

; <label>:13                                      ; preds = %9
  %14 = load i32* %3, align 4
  store i32 %14, i32* %i, align 4
  br label %15

; <label>:15                                      ; preds = %37, %13
  %16 = load i32* %i, align 4
  %17 = load %struct.arrayList** %2, align 8
  %18 = getelementptr inbounds %struct.arrayList* %17, i32 0, i32 1
  %19 = load i32* %18, align 4
  %20 = sub nsw i32 %19, 1
  %21 = icmp slt i32 %16, %20
  br i1 %21, label %22, label %40

; <label>:22                                      ; preds = %15
  %23 = load i32* %i, align 4
  %24 = add nsw i32 %23, 1
  %25 = sext i32 %24 to i64
  %26 = load %struct.arrayList** %2, align 8
  %27 = getelementptr inbounds %struct.arrayList* %26, i32 0, i32 2
  %28 = load i32** %27, align 8
  %29 = getelementptr inbounds i32* %28, i64 %25
  %30 = load i32* %29, align 4
  %31 = load i32* %i, align 4
  %32 = sext i32 %31 to i64
  %33 = load %struct.arrayList** %2, align 8
  %34 = getelementptr inbounds %struct.arrayList* %33, i32 0, i32 2
  %35 = load i32** %34, align 8
  %36 = getelementptr inbounds i32* %35, i64 %32
  store i32 %30, i32* %36, align 4
  br label %37

; <label>:37                                      ; preds = %22
  %38 = load i32* %i, align 4
  %39 = add nsw i32 %38, 1
  store i32 %39, i32* %i, align 4
  br label %15

; <label>:40                                      ; preds = %15
  %41 = load %struct.arrayList** %2, align 8
  %42 = getelementptr inbounds %struct.arrayList* %41, i32 0, i32 1
  %43 = load i32* %42, align 4
  %44 = add nsw i32 %43, -1
  store i32 %44, i32* %42, align 4
  store i32 0, i32* %1
  br label %45

; <label>:45                                      ; preds = %40, %12
  %46 = load i32* %1
  ret i32 %46
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
  store %struct.arrayList* %list, %struct.arrayList** %1, align 8
  store i32 %val, i32* %2, align 4
  %3 = load %struct.arrayList** %1, align 8
  %4 = load %struct.arrayList** %1, align 8
  %5 = load i32* %2, align 4
  %6 = call i32 @getIndexFromList(%struct.arrayList* %4, i32 %5)
  %7 = call i32 @removeFromListByIndex(%struct.arrayList* %3, i32 %6)
  ret i32 %7
}

; Function Attrs: nounwind ssp uwtable
define %struct.arrayList* @combineList(%struct.arrayList* %dest, %struct.arrayList* %src) #0 {
  %1 = alloca %struct.arrayList*, align 8
  %2 = alloca %struct.arrayList*, align 8
  %target = alloca i32, align 4
  store %struct.arrayList* %dest, %struct.arrayList** %1, align 8
  store %struct.arrayList* %src, %struct.arrayList** %2, align 8
  %3 = load %struct.arrayList** %1, align 8
  %4 = getelementptr inbounds %struct.arrayList* %3, i32 0, i32 1
  %5 = load i32* %4, align 4
  %6 = load %struct.arrayList** %2, align 8
  %7 = getelementptr inbounds %struct.arrayList* %6, i32 0, i32 1
  %8 = load i32* %7, align 4
  %9 = add nsw i32 %5, %8
  store i32 %9, i32* %target, align 4
  %10 = load %struct.arrayList** %1, align 8
  %11 = getelementptr inbounds %struct.arrayList* %10, i32 0, i32 0
  %12 = load i32* %11, align 4
  %13 = load i32* %target, align 4
  %14 = icmp slt i32 %12, %13
  br i1 %14, label %15, label %19

; <label>:15                                      ; preds = %0
  %16 = load %struct.arrayList** %1, align 8
  %17 = load i32* %target, align 4
  %18 = call i32 @expandListToCapacity(%struct.arrayList* %16, i32 %17)
  br label %19

; <label>:19                                      ; preds = %15, %0
  %20 = load %struct.arrayList** %1, align 8
  %21 = getelementptr inbounds %struct.arrayList* %20, i32 0, i32 1
  %22 = load i32* %21, align 4
  %23 = sext i32 %22 to i64
  %24 = load %struct.arrayList** %1, align 8
  %25 = getelementptr inbounds %struct.arrayList* %24, i32 0, i32 2
  %26 = load i32** %25, align 8
  %27 = getelementptr inbounds i32* %26, i64 %23
  %28 = bitcast i32* %27 to i8*
  %29 = load %struct.arrayList** %2, align 8
  %30 = getelementptr inbounds %struct.arrayList* %29, i32 0, i32 2
  %31 = load i32** %30, align 8
  %32 = bitcast i32* %31 to i8*
  %33 = load %struct.arrayList** %2, align 8
  %34 = getelementptr inbounds %struct.arrayList* %33, i32 0, i32 1
  %35 = load i32* %34, align 4
  %36 = sext i32 %35 to i64
  %37 = mul i64 4, %36
  call void @llvm.memcpy.p0i8.p0i8.i64(i8* %28, i8* %32, i64 %37, i32 4, i1 false)
  %38 = load %struct.arrayList** %2, align 8
  %39 = getelementptr inbounds %struct.arrayList* %38, i32 0, i32 1
  %40 = load i32* %39, align 4
  %41 = load %struct.arrayList** %1, align 8
  %42 = getelementptr inbounds %struct.arrayList* %41, i32 0, i32 1
  %43 = load i32* %42, align 4
  %44 = add nsw i32 %43, %40
  store i32 %44, i32* %42, align 4
  %45 = load %struct.arrayList** %1, align 8
  ret %struct.arrayList* %45
}

; Function Attrs: nounwind ssp uwtable
define %struct.arrayList* @sortList(%struct.arrayList* %list, i32 %l, i32 %r) #0 {
  %1 = alloca %struct.arrayList*, align 8
  %2 = alloca i32, align 4
  %3 = alloca i32, align 4
  %i = alloca i32, align 4
  %j = alloca i32, align 4
  %t = alloca i32, align 4
  %m = alloca i32, align 4
  store %struct.arrayList* %list, %struct.arrayList** %1, align 8
  store i32 %l, i32* %2, align 4
  store i32 %r, i32* %3, align 4
  %4 = load i32* %2, align 4
  store i32 %4, i32* %i, align 4
  %5 = load i32* %3, align 4
  store i32 %5, i32* %j, align 4
  %6 = load i32* %2, align 4
  %7 = load i32* %3, align 4
  %8 = add nsw i32 %6, %7
  %9 = ashr i32 %8, 1
  %10 = sext i32 %9 to i64
  %11 = load %struct.arrayList** %1, align 8
  %12 = getelementptr inbounds %struct.arrayList* %11, i32 0, i32 2
  %13 = load i32** %12, align 8
  %14 = getelementptr inbounds i32* %13, i64 %10
  %15 = load i32* %14, align 4
  store i32 %15, i32* %m, align 4
  br label %16

; <label>:16                                      ; preds = %81, %0
  br label %17

; <label>:17                                      ; preds = %27, %16
  %18 = load i32* %i, align 4
  %19 = sext i32 %18 to i64
  %20 = load %struct.arrayList** %1, align 8
  %21 = getelementptr inbounds %struct.arrayList* %20, i32 0, i32 2
  %22 = load i32** %21, align 8
  %23 = getelementptr inbounds i32* %22, i64 %19
  %24 = load i32* %23, align 4
  %25 = load i32* %m, align 4
  %26 = icmp slt i32 %24, %25
  br i1 %26, label %27, label %30

; <label>:27                                      ; preds = %17
  %28 = load i32* %i, align 4
  %29 = add nsw i32 %28, 1
  store i32 %29, i32* %i, align 4
  br label %17

; <label>:30                                      ; preds = %17
  br label %31

; <label>:31                                      ; preds = %41, %30
  %32 = load i32* %j, align 4
  %33 = sext i32 %32 to i64
  %34 = load %struct.arrayList** %1, align 8
  %35 = getelementptr inbounds %struct.arrayList* %34, i32 0, i32 2
  %36 = load i32** %35, align 8
  %37 = getelementptr inbounds i32* %36, i64 %33
  %38 = load i32* %37, align 4
  %39 = load i32* %m, align 4
  %40 = icmp sgt i32 %38, %39
  br i1 %40, label %41, label %44

; <label>:41                                      ; preds = %31
  %42 = load i32* %j, align 4
  %43 = add nsw i32 %42, -1
  store i32 %43, i32* %j, align 4
  br label %31

; <label>:44                                      ; preds = %31
  %45 = load i32* %i, align 4
  %46 = load i32* %j, align 4
  %47 = icmp sle i32 %45, %46
  br i1 %47, label %48, label %80

; <label>:48                                      ; preds = %44
  %49 = load i32* %i, align 4
  %50 = sext i32 %49 to i64
  %51 = load %struct.arrayList** %1, align 8
  %52 = getelementptr inbounds %struct.arrayList* %51, i32 0, i32 2
  %53 = load i32** %52, align 8
  %54 = getelementptr inbounds i32* %53, i64 %50
  %55 = load i32* %54, align 4
  store i32 %55, i32* %t, align 4
  %56 = load i32* %j, align 4
  %57 = sext i32 %56 to i64
  %58 = load %struct.arrayList** %1, align 8
  %59 = getelementptr inbounds %struct.arrayList* %58, i32 0, i32 2
  %60 = load i32** %59, align 8
  %61 = getelementptr inbounds i32* %60, i64 %57
  %62 = load i32* %61, align 4
  %63 = load i32* %i, align 4
  %64 = sext i32 %63 to i64
  %65 = load %struct.arrayList** %1, align 8
  %66 = getelementptr inbounds %struct.arrayList* %65, i32 0, i32 2
  %67 = load i32** %66, align 8
  %68 = getelementptr inbounds i32* %67, i64 %64
  store i32 %62, i32* %68, align 4
  %69 = load i32* %t, align 4
  %70 = load i32* %j, align 4
  %71 = sext i32 %70 to i64
  %72 = load %struct.arrayList** %1, align 8
  %73 = getelementptr inbounds %struct.arrayList* %72, i32 0, i32 2
  %74 = load i32** %73, align 8
  %75 = getelementptr inbounds i32* %74, i64 %71
  store i32 %69, i32* %75, align 4
  %76 = load i32* %i, align 4
  %77 = add nsw i32 %76, 1
  store i32 %77, i32* %i, align 4
  %78 = load i32* %j, align 4
  %79 = add nsw i32 %78, -1
  store i32 %79, i32* %j, align 4
  br label %80

; <label>:80                                      ; preds = %48, %44
  br label %81

; <label>:81                                      ; preds = %80
  %82 = load i32* %i, align 4
  %83 = load i32* %j, align 4
  %84 = icmp sle i32 %82, %83
  br i1 %84, label %16, label %85

; <label>:85                                      ; preds = %81
  %86 = load i32* %2, align 4
  %87 = load i32* %j, align 4
  %88 = icmp slt i32 %86, %87
  br i1 %88, label %89, label %94

; <label>:89                                      ; preds = %85
  %90 = load %struct.arrayList** %1, align 8
  %91 = load i32* %2, align 4
  %92 = load i32* %j, align 4
  %93 = call %struct.arrayList* @sortList(%struct.arrayList* %90, i32 %91, i32 %92)
  br label %94

; <label>:94                                      ; preds = %89, %85
  %95 = load i32* %i, align 4
  %96 = load i32* %3, align 4
  %97 = icmp slt i32 %95, %96
  br i1 %97, label %98, label %103

; <label>:98                                      ; preds = %94
  %99 = load %struct.arrayList** %1, align 8
  %100 = load i32* %i, align 4
  %101 = load i32* %3, align 4
  %102 = call %struct.arrayList* @sortList(%struct.arrayList* %99, i32 %100, i32 %101)
  br label %103

; <label>:103                                     ; preds = %98, %94
  %104 = load %struct.arrayList** %1, align 8
  ret %struct.arrayList* %104
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
  %i = alloca i32, align 4
  store i32 0, i32* %1
  %2 = call i32 (i8*, ...)* @printf(i8* getelementptr inbounds ([24 x i8]* @.str1, i32 0, i32 0))
  %3 = call %struct.arrayList* @createList()
  store %struct.arrayList* %3, %struct.arrayList** %list1, align 8
  %4 = ptrtoint %struct.arrayList* %3 to i32
  call void @printLog(i8* getelementptr inbounds ([21 x i8]* @.str2, i32 0, i32 0), i8* getelementptr inbounds ([8 x i8]* @.str3, i32 0, i32 0), i32 %4)
  %5 = load %struct.arrayList** %list1, align 8
  %6 = call i32 @initList(%struct.arrayList* %5)
  call void @printLog(i8* getelementptr inbounds ([26 x i8]* @.str4, i32 0, i32 0), i8* getelementptr inbounds ([13 x i8]* @.str5, i32 0, i32 0), i32 %6)
  %7 = call %struct.arrayList* @createList()
  store %struct.arrayList* %7, %struct.arrayList** %list2, align 8
  %8 = ptrtoint %struct.arrayList* %7 to i32
  call void @printLog(i8* getelementptr inbounds ([21 x i8]* @.str2, i32 0, i32 0), i8* getelementptr inbounds ([8 x i8]* @.str3, i32 0, i32 0), i32 %8)
  %9 = load %struct.arrayList** %list2, align 8
  %10 = call i32 @initList(%struct.arrayList* %9)
  call void @printLog(i8* getelementptr inbounds ([26 x i8]* @.str4, i32 0, i32 0), i8* getelementptr inbounds ([13 x i8]* @.str6, i32 0, i32 0), i32 %10)
  %11 = load %struct.arrayList** %list1, align 8
  %12 = call i32 @insertToList(%struct.arrayList* %11, i32 5, i32 0)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str8, i32 0, i32 0), i32 %12)
  %13 = load %struct.arrayList** %list1, align 8
  %14 = call i32 @insertToList(%struct.arrayList* %13, i32 2, i32 1)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str9, i32 0, i32 0), i32 %14)
  %15 = load %struct.arrayList** %list1, align 8
  %16 = call i32 @insertToList(%struct.arrayList* %15, i32 8, i32 2)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str10, i32 0, i32 0), i32 %16)
  %17 = load %struct.arrayList** %list1, align 8
  %18 = call i32 @insertToList(%struct.arrayList* %17, i32 9, i32 3)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str11, i32 0, i32 0), i32 %18)
  %19 = load %struct.arrayList** %list1, align 8
  %20 = call i32 @removeFromListByValue(%struct.arrayList* %19, i32 9)
  call void @printLog(i8* getelementptr inbounds ([35 x i8]* @.str12, i32 0, i32 0), i8* getelementptr inbounds ([21 x i8]* @.str13, i32 0, i32 0), i32 %20)
  %21 = load %struct.arrayList** %list1, align 8
  %22 = call i32 @insertToList(%struct.arrayList* %21, i32 0, i32 3)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str14, i32 0, i32 0), i32 %22)
  %23 = load %struct.arrayList** %list1, align 8
  %24 = call i32 @insertToList(%struct.arrayList* %23, i32 6, i32 4)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str15, i32 0, i32 0), i32 %24)
  %25 = load %struct.arrayList** %list2, align 8
  %26 = call i32 @insertToList(%struct.arrayList* %25, i32 7, i32 0)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str16, i32 0, i32 0), i32 %26)
  %27 = load %struct.arrayList** %list2, align 8
  %28 = call i32 @insertToList(%struct.arrayList* %27, i32 0, i32 0)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str17, i32 0, i32 0), i32 %28)
  %29 = load %struct.arrayList** %list2, align 8
  %30 = call i32 @insertToList(%struct.arrayList* %29, i32 9, i32 0)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str18, i32 0, i32 0), i32 %30)
  %31 = load %struct.arrayList** %list2, align 8
  %32 = call i32 @insertToList(%struct.arrayList* %31, i32 2, i32 0)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str19, i32 0, i32 0), i32 %32)
  %33 = load %struct.arrayList** %list2, align 8
  %34 = call i32 @insertToList(%struct.arrayList* %33, i32 4, i32 0)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str20, i32 0, i32 0), i32 %34)
  %35 = load %struct.arrayList** %list1, align 8
  %36 = load %struct.arrayList** %list2, align 8
  %37 = call %struct.arrayList* @combineList(%struct.arrayList* %35, %struct.arrayList* %36)
  %38 = ptrtoint %struct.arrayList* %37 to i32
  call void @printLog(i8* getelementptr inbounds ([28 x i8]* @.str21, i32 0, i32 0), i8* getelementptr inbounds ([21 x i8]* @.str22, i32 0, i32 0), i32 %38)
  %39 = load %struct.arrayList** %list1, align 8
  %40 = load %struct.arrayList** %list1, align 8
  %41 = getelementptr inbounds %struct.arrayList* %40, i32 0, i32 1
  %42 = load i32* %41, align 4
  %43 = sub nsw i32 %42, 1
  %44 = call %struct.arrayList* @sortList(%struct.arrayList* %39, i32 0, i32 %43)
  %45 = ptrtoint %struct.arrayList* %44 to i32
  call void @printLog(i8* getelementptr inbounds ([29 x i8]* @.str23, i32 0, i32 0), i8* getelementptr inbounds ([13 x i8]* @.str24, i32 0, i32 0), i32 %45)
  %46 = call i32 (i8*, ...)* @printf(i8* getelementptr inbounds ([14 x i8]* @.str25, i32 0, i32 0))
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
  %61 = call i32 (i8*, ...)* @printf(i8* getelementptr inbounds ([4 x i8]* @.str26, i32 0, i32 0), i32 %60)
  br label %62

; <label>:62                                      ; preds = %53
  %63 = load i32* %i, align 4
  %64 = add nsw i32 %63, 1
  store i32 %64, i32* %i, align 4
  br label %47

; <label>:65                                      ; preds = %47
  %66 = call i32 (i8*, ...)* @printf(i8* getelementptr inbounds ([2 x i8]* @.str27, i32 0, i32 0))
  %67 = load %struct.arrayList** %list1, align 8
  call void @deleteList(%struct.arrayList* %67)
  call void @printLog(i8* getelementptr inbounds ([22 x i8]* @.str28, i32 0, i32 0), i8* getelementptr inbounds ([6 x i8]* @.str29, i32 0, i32 0), i32 0)
  %68 = load %struct.arrayList** %list2, align 8
  call void @deleteList(%struct.arrayList* %68)
  call void @printLog(i8* getelementptr inbounds ([22 x i8]* @.str28, i32 0, i32 0), i8* getelementptr inbounds ([6 x i8]* @.str30, i32 0, i32 0), i32 0)
  ret i32 0
}

attributes #0 = { nounwind ssp uwtable "less-precise-fpmad"="false" "no-frame-pointer-elim"="true" "no-frame-pointer-elim-non-leaf" "no-infs-fp-math"="false" "no-nans-fp-math"="false" "stack-protector-buffer-size"="8" "unsafe-fp-math"="false" "use-soft-float"="false" }
attributes #1 = { "less-precise-fpmad"="false" "no-frame-pointer-elim"="true" "no-frame-pointer-elim-non-leaf" "no-infs-fp-math"="false" "no-nans-fp-math"="false" "stack-protector-buffer-size"="8" "unsafe-fp-math"="false" "use-soft-float"="false" }
attributes #2 = { nounwind }

!llvm.ident = !{!0}

!0 = metadata !{metadata !"Apple LLVM version 5.1 (clang-503.0.40) (based on LLVM 3.4svn)"}
