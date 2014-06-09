; ModuleID = 'arraylist.c'
target datalayout = "e-p:32:32:32-i1:8:8-i8:8:8-i16:16:16-i32:32:32-i64:32:64-f32:32:32-f64:32:64-v64:64:64-v128:128:128-a0:0:64-f80:32:32-n8:16:32-S128"
target triple = "i386-pc-linux-gnu"

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
@.str21 = private unnamed_addr constant [22 x i8] c"Delete the ArrayList.\00", align 1
@.str22 = private unnamed_addr constant [6 x i8] c"list1\00", align 1
@.str23 = private unnamed_addr constant [6 x i8] c"list2\00", align 1

define %struct.arrayList* @createList() nounwind {
  %result = alloca %struct.arrayList*, align 4
  store %struct.arrayList* null, %struct.arrayList** %result, align 4
  %1 = call noalias i8* @malloc(i32 12) nounwind
  %2 = bitcast i8* %1 to %struct.arrayList*
  store %struct.arrayList* %2, %struct.arrayList** %result, align 4
  %3 = load %struct.arrayList** %result, align 4
  %4 = icmp ne %struct.arrayList* %3, null
  br i1 %4, label %5, label %12

; <label>:5                                       ; preds = %0
  %6 = load %struct.arrayList** %result, align 4
  %7 = getelementptr inbounds %struct.arrayList* %6, i32 0, i32 0
  store i32 0, i32* %7, align 4
  %8 = load %struct.arrayList** %result, align 4
  %9 = getelementptr inbounds %struct.arrayList* %8, i32 0, i32 1
  store i32 0, i32* %9, align 4
  %10 = load %struct.arrayList** %result, align 4
  %11 = getelementptr inbounds %struct.arrayList* %10, i32 0, i32 2
  store i32* null, i32** %11, align 4
  br label %12

; <label>:12                                      ; preds = %5, %0
  %13 = load %struct.arrayList** %result, align 4
  ret %struct.arrayList* %13
}

declare noalias i8* @malloc(i32) nounwind

define i32 @initList(%struct.arrayList* %list) nounwind {
  %1 = alloca i32, align 4
  %2 = alloca %struct.arrayList*, align 4
  store %struct.arrayList* %list, %struct.arrayList** %2, align 4
  %3 = load %struct.arrayList** %2, align 4
  %4 = getelementptr inbounds %struct.arrayList* %3, i32 0, i32 2
  %5 = load i32** %4, align 4
  %6 = icmp ne i32* %5, null
  br i1 %6, label %7, label %8

; <label>:7                                       ; preds = %0
  store i32 1, i32* %1
  br label %23

; <label>:8                                       ; preds = %0
  %9 = load %struct.arrayList** %2, align 4
  %10 = getelementptr inbounds %struct.arrayList* %9, i32 0, i32 1
  store i32 0, i32* %10, align 4
  %11 = load %struct.arrayList** %2, align 4
  %12 = getelementptr inbounds %struct.arrayList* %11, i32 0, i32 0
  store i32 5, i32* %12, align 4
  %13 = call noalias i8* @malloc(i32 20) nounwind
  %14 = bitcast i8* %13 to i32*
  %15 = load %struct.arrayList** %2, align 4
  %16 = getelementptr inbounds %struct.arrayList* %15, i32 0, i32 2
  store i32* %14, i32** %16, align 4
  %17 = load %struct.arrayList** %2, align 4
  %18 = getelementptr inbounds %struct.arrayList* %17, i32 0, i32 2
  %19 = load i32** %18, align 4
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

define void @releaseList(%struct.arrayList* %list) nounwind {
  %1 = alloca %struct.arrayList*, align 4
  store %struct.arrayList* %list, %struct.arrayList** %1, align 4
  %2 = load %struct.arrayList** %1, align 4
  %3 = getelementptr inbounds %struct.arrayList* %2, i32 0, i32 2
  %4 = load i32** %3, align 4
  %5 = icmp ne i32* %4, null
  br i1 %5, label %6, label %11

; <label>:6                                       ; preds = %0
  %7 = load %struct.arrayList** %1, align 4
  %8 = getelementptr inbounds %struct.arrayList* %7, i32 0, i32 2
  %9 = load i32** %8, align 4
  %10 = bitcast i32* %9 to i8*
  call void @free(i8* %10) nounwind
  br label %11

; <label>:11                                      ; preds = %6, %0
  %12 = load %struct.arrayList** %1, align 4
  %13 = getelementptr inbounds %struct.arrayList* %12, i32 0, i32 0
  store i32 0, i32* %13, align 4
  %14 = load %struct.arrayList** %1, align 4
  %15 = getelementptr inbounds %struct.arrayList* %14, i32 0, i32 1
  store i32 0, i32* %15, align 4
  %16 = load %struct.arrayList** %1, align 4
  %17 = getelementptr inbounds %struct.arrayList* %16, i32 0, i32 2
  store i32* null, i32** %17, align 4
  ret void
}

declare void @free(i8*) nounwind

define void @deleteList(%struct.arrayList* %list) nounwind {
  %1 = alloca %struct.arrayList*, align 4
  store %struct.arrayList* %list, %struct.arrayList** %1, align 4
  %2 = load %struct.arrayList** %1, align 4
  %3 = icmp ne %struct.arrayList* %2, null
  br i1 %3, label %4, label %8

; <label>:4                                       ; preds = %0
  %5 = load %struct.arrayList** %1, align 4
  call void @releaseList(%struct.arrayList* %5)
  %6 = load %struct.arrayList** %1, align 4
  %7 = bitcast %struct.arrayList* %6 to i8*
  call void @free(i8* %7) nounwind
  br label %8

; <label>:8                                       ; preds = %4, %0
  ret void
}

define i32 @getDataFromList(%struct.arrayList* %list, i32 %index) nounwind {
  %1 = alloca %struct.arrayList*, align 4
  %2 = alloca i32, align 4
  %rtn = alloca i32, align 4
  store %struct.arrayList* %list, %struct.arrayList** %1, align 4
  store i32 %index, i32* %2, align 4
  %3 = load i32* %2, align 4
  %4 = load %struct.arrayList** %1, align 4
  %5 = getelementptr inbounds %struct.arrayList* %4, i32 0, i32 2
  %6 = load i32** %5, align 4
  %7 = getelementptr inbounds i32* %6, i32 %3
  %8 = load i32* %7
  store i32 %8, i32* %rtn, align 4
  %9 = load i32* %rtn, align 4
  ret i32 %9
}

define i32 @expandListToCapacity(%struct.arrayList* %list, i32 %target) nounwind {
  %1 = alloca i32, align 4
  %2 = alloca %struct.arrayList*, align 4
  %3 = alloca i32, align 4
  %tmp = alloca i32*, align 4
  %t = alloca i32, align 4
  %tt = alloca i32, align 4
  store %struct.arrayList* %list, %struct.arrayList** %2, align 4
  store i32 %target, i32* %3, align 4
  store i32* null, i32** %tmp, align 4
  %4 = load i32* %3, align 4
  %5 = mul nsw i32 4, %4
  store i32 %5, i32* %t, align 4
  %6 = load %struct.arrayList** %2, align 4
  %7 = getelementptr inbounds %struct.arrayList* %6, i32 0, i32 1
  %8 = load i32* %7, align 4
  %9 = mul nsw i32 4, %8
  store i32 %9, i32* %tt, align 4
  %10 = load i32* %t, align 4
  %11 = call noalias i8* @malloc(i32 %10) nounwind
  %12 = bitcast i8* %11 to i32*
  store i32* %12, i32** %tmp, align 4
  %13 = load i32** %tmp, align 4
  %14 = icmp ne i32* %13, null
  br i1 %14, label %15, label %33

; <label>:15                                      ; preds = %0
  %16 = load i32** %tmp, align 4
  %17 = bitcast i32* %16 to i8*
  %18 = load %struct.arrayList** %2, align 4
  %19 = getelementptr inbounds %struct.arrayList* %18, i32 0, i32 2
  %20 = load i32** %19, align 4
  %21 = bitcast i32* %20 to i8*
  %22 = load i32* %tt, align 4
  call void @llvm.memcpy.p0i8.p0i8.i32(i8* %17, i8* %21, i32 %22, i32 1, i1 false)
  %23 = load %struct.arrayList** %2, align 4
  %24 = getelementptr inbounds %struct.arrayList* %23, i32 0, i32 2
  %25 = load i32** %24, align 4
  %26 = bitcast i32* %25 to i8*
  call void @free(i8* %26) nounwind
  %27 = load i32** %tmp, align 4
  %28 = load %struct.arrayList** %2, align 4
  %29 = getelementptr inbounds %struct.arrayList* %28, i32 0, i32 2
  store i32* %27, i32** %29, align 4
  %30 = load i32* %3, align 4
  %31 = load %struct.arrayList** %2, align 4
  %32 = getelementptr inbounds %struct.arrayList* %31, i32 0, i32 0
  store i32 %30, i32* %32, align 4
  store i32 1, i32* %1
  br label %34

; <label>:33                                      ; preds = %0
  store i32 0, i32* %1
  br label %34

; <label>:34                                      ; preds = %33, %15
  %35 = load i32* %1
  ret i32 %35
}

declare void @llvm.memcpy.p0i8.p0i8.i32(i8* nocapture, i8* nocapture, i32, i32, i1) nounwind

define i32 @expandList(%struct.arrayList* %list) nounwind {
  %1 = alloca i32, align 4
  %2 = alloca %struct.arrayList*, align 4
  %target = alloca i32, align 4
  %delta = alloca i32, align 4
  %t = alloca i32, align 4
  store %struct.arrayList* %list, %struct.arrayList** %2, align 4
  %3 = load %struct.arrayList** %2, align 4
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
  %11 = load %struct.arrayList** %2, align 4
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
  %22 = load %struct.arrayList** %2, align 4
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

define i32 @insertToList(%struct.arrayList* %list, i32 %val, i32 %index) nounwind {
  %1 = alloca %struct.arrayList*, align 4
  %2 = alloca i32, align 4
  %3 = alloca i32, align 4
  %i = alloca i32, align 4
  store %struct.arrayList* %list, %struct.arrayList** %1, align 4
  store i32 %val, i32* %2, align 4
  store i32 %index, i32* %3, align 4
  %4 = load %struct.arrayList** %1, align 4
  %5 = getelementptr inbounds %struct.arrayList* %4, i32 0, i32 1
  %6 = load i32* %5, align 4
  store i32 %6, i32* %i, align 4
  br label %7

; <label>:7                                       ; preds = %24, %0
  %8 = load i32* %i, align 4
  %9 = load i32* %3, align 4
  %10 = icmp sgt i32 %8, %9
  br i1 %10, label %11, label %27

; <label>:11                                      ; preds = %7
  %12 = load i32* %i, align 4
  %13 = sub nsw i32 %12, 1
  %14 = load %struct.arrayList** %1, align 4
  %15 = getelementptr inbounds %struct.arrayList* %14, i32 0, i32 2
  %16 = load i32** %15, align 4
  %17 = getelementptr inbounds i32* %16, i32 %13
  %18 = load i32* %17
  %19 = load i32* %i, align 4
  %20 = load %struct.arrayList** %1, align 4
  %21 = getelementptr inbounds %struct.arrayList* %20, i32 0, i32 2
  %22 = load i32** %21, align 4
  %23 = getelementptr inbounds i32* %22, i32 %19
  store i32 %18, i32* %23
  br label %24

; <label>:24                                      ; preds = %11
  %25 = load i32* %i, align 4
  %26 = add nsw i32 %25, -1
  store i32 %26, i32* %i, align 4
  br label %7

; <label>:27                                      ; preds = %7
  %28 = load i32* %2, align 4
  %29 = load i32* %3, align 4
  %30 = load %struct.arrayList** %1, align 4
  %31 = getelementptr inbounds %struct.arrayList* %30, i32 0, i32 2
  %32 = load i32** %31, align 4
  %33 = getelementptr inbounds i32* %32, i32 %29
  store i32 %28, i32* %33
  %34 = load %struct.arrayList** %1, align 4
  %35 = getelementptr inbounds %struct.arrayList* %34, i32 0, i32 1
  %36 = load i32* %35, align 4
  %37 = add nsw i32 %36, 1
  store i32 %37, i32* %35, align 4
  ret i32 0
}

define i32 @removeFromListByIndex(%struct.arrayList* %list, i32 %index) nounwind {
  %1 = alloca %struct.arrayList*, align 4
  %2 = alloca i32, align 4
  %i = alloca i32, align 4
  store %struct.arrayList* %list, %struct.arrayList** %1, align 4
  store i32 %index, i32* %2, align 4
  %3 = load i32* %2, align 4
  store i32 %3, i32* %i, align 4
  br label %4

; <label>:4                                       ; preds = %24, %0
  %5 = load i32* %i, align 4
  %6 = load %struct.arrayList** %1, align 4
  %7 = getelementptr inbounds %struct.arrayList* %6, i32 0, i32 1
  %8 = load i32* %7, align 4
  %9 = sub nsw i32 %8, 1
  %10 = icmp slt i32 %5, %9
  br i1 %10, label %11, label %27

; <label>:11                                      ; preds = %4
  %12 = load i32* %i, align 4
  %13 = add nsw i32 %12, 1
  %14 = load %struct.arrayList** %1, align 4
  %15 = getelementptr inbounds %struct.arrayList* %14, i32 0, i32 2
  %16 = load i32** %15, align 4
  %17 = getelementptr inbounds i32* %16, i32 %13
  %18 = load i32* %17
  %19 = load i32* %i, align 4
  %20 = load %struct.arrayList** %1, align 4
  %21 = getelementptr inbounds %struct.arrayList* %20, i32 0, i32 2
  %22 = load i32** %21, align 4
  %23 = getelementptr inbounds i32* %22, i32 %19
  store i32 %18, i32* %23
  br label %24

; <label>:24                                      ; preds = %11
  %25 = load i32* %i, align 4
  %26 = add nsw i32 %25, 1
  store i32 %26, i32* %i, align 4
  br label %4

; <label>:27                                      ; preds = %4
  %28 = load %struct.arrayList** %1, align 4
  %29 = getelementptr inbounds %struct.arrayList* %28, i32 0, i32 1
  %30 = load i32* %29, align 4
  %31 = add nsw i32 %30, -1
  store i32 %31, i32* %29, align 4
  ret i32 0
}

define i32 @getIndexFromList(%struct.arrayList* %list, i32 %val) nounwind {
  %1 = alloca i32, align 4
  %2 = alloca %struct.arrayList*, align 4
  %3 = alloca i32, align 4
  %i = alloca i32, align 4
  store %struct.arrayList* %list, %struct.arrayList** %2, align 4
  store i32 %val, i32* %3, align 4
  store i32 0, i32* %i, align 4
  br label %4

; <label>:4                                       ; preds = %22, %0
  %5 = load i32* %i, align 4
  %6 = load %struct.arrayList** %2, align 4
  %7 = getelementptr inbounds %struct.arrayList* %6, i32 0, i32 1
  %8 = load i32* %7, align 4
  %9 = icmp slt i32 %5, %8
  br i1 %9, label %10, label %25

; <label>:10                                      ; preds = %4
  %11 = load i32* %i, align 4
  %12 = load %struct.arrayList** %2, align 4
  %13 = getelementptr inbounds %struct.arrayList* %12, i32 0, i32 2
  %14 = load i32** %13, align 4
  %15 = getelementptr inbounds i32* %14, i32 %11
  %16 = load i32* %15
  %17 = load i32* %3, align 4
  %18 = icmp eq i32 %16, %17
  br i1 %18, label %19, label %21

; <label>:19                                      ; preds = %10
  %20 = load i32* %i, align 4
  store i32 %20, i32* %1
  br label %26

; <label>:21                                      ; preds = %10
  br label %22

; <label>:22                                      ; preds = %21
  %23 = load i32* %i, align 4
  %24 = add nsw i32 %23, 1
  store i32 %24, i32* %i, align 4
  br label %4

; <label>:25                                      ; preds = %4
  store i32 -1, i32* %1
  br label %26

; <label>:26                                      ; preds = %25, %19
  %27 = load i32* %1
  ret i32 %27
}

define i32 @removeFromListByValue(%struct.arrayList* %list, i32 %val) nounwind {
  %1 = alloca %struct.arrayList*, align 4
  %2 = alloca i32, align 4
  %index = alloca i32, align 4
  %rtn = alloca i32, align 4
  store %struct.arrayList* %list, %struct.arrayList** %1, align 4
  store i32 %val, i32* %2, align 4
  %3 = load %struct.arrayList** %1, align 4
  %4 = load i32* %2, align 4
  %5 = call i32 @getIndexFromList(%struct.arrayList* %3, i32 %4)
  store i32 %5, i32* %index, align 4
  %6 = load %struct.arrayList** %1, align 4
  %7 = load i32* %index, align 4
  %8 = call i32 @removeFromListByIndex(%struct.arrayList* %6, i32 %7)
  store i32 %8, i32* %rtn, align 4
  %9 = load i32* %rtn, align 4
  ret i32 %9
}

define void @printLog(i8* %hint, i8* %params, i32 %rtn) nounwind {
  %1 = alloca i8*, align 4
  %2 = alloca i8*, align 4
  %3 = alloca i32, align 4
  store i8* %hint, i8** %1, align 4
  store i8* %params, i8** %2, align 4
  store i32 %rtn, i32* %3, align 4
  %4 = load i8** %1, align 4
  %5 = load i8** %2, align 4
  %6 = load i32* %3, align 4
  %7 = call i32 (i8*, ...)* @printf(i8* getelementptr inbounds ([40 x i8]* @.str, i32 0, i32 0), i8* %4, i8* %5, i32 %6)
  ret void
}

declare i32 @printf(i8*, ...)

define i32 @main() nounwind {
  %1 = alloca i32, align 4
  %list1 = alloca %struct.arrayList*, align 4
  %list2 = alloca %struct.arrayList*, align 4
  %t = alloca i32, align 4
  store i32 0, i32* %1
  %2 = call i32 (i8*, ...)* @printf(i8* getelementptr inbounds ([24 x i8]* @.str1, i32 0, i32 0))
  %3 = call %struct.arrayList* @createList()
  store %struct.arrayList* %3, %struct.arrayList** %list1, align 4
  %4 = load %struct.arrayList** %list1, align 4
  %5 = ptrtoint %struct.arrayList* %4 to i32
  call void @printLog(i8* getelementptr inbounds ([21 x i8]* @.str2, i32 0, i32 0), i8* getelementptr inbounds ([8 x i8]* @.str3, i32 0, i32 0), i32 %5)
  %6 = load %struct.arrayList** %list1, align 4
  %7 = call i32 @initList(%struct.arrayList* %6)
  call void @printLog(i8* getelementptr inbounds ([26 x i8]* @.str4, i32 0, i32 0), i8* getelementptr inbounds ([13 x i8]* @.str5, i32 0, i32 0), i32 %7)
  %8 = call %struct.arrayList* @createList()
  store %struct.arrayList* %8, %struct.arrayList** %list2, align 4
  %9 = load %struct.arrayList** %list2, align 4
  %10 = ptrtoint %struct.arrayList* %9 to i32
  call void @printLog(i8* getelementptr inbounds ([21 x i8]* @.str2, i32 0, i32 0), i8* getelementptr inbounds ([8 x i8]* @.str3, i32 0, i32 0), i32 %10)
  %11 = load %struct.arrayList** %list2, align 4
  %12 = call i32 @initList(%struct.arrayList* %11)
  call void @printLog(i8* getelementptr inbounds ([26 x i8]* @.str4, i32 0, i32 0), i8* getelementptr inbounds ([13 x i8]* @.str6, i32 0, i32 0), i32 %12)
  %13 = load %struct.arrayList** %list1, align 4
  %14 = call i32 @insertToList(%struct.arrayList* %13, i32 5, i32 0)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str8, i32 0, i32 0), i32 %14)
  %15 = load %struct.arrayList** %list1, align 4
  %16 = call i32 @insertToList(%struct.arrayList* %15, i32 2, i32 1)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str9, i32 0, i32 0), i32 %16)
  %17 = load %struct.arrayList** %list1, align 4
  %18 = call i32 @insertToList(%struct.arrayList* %17, i32 8, i32 2)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str10, i32 0, i32 0), i32 %18)
  %19 = load %struct.arrayList** %list1, align 4
  %20 = call i32 @insertToList(%struct.arrayList* %19, i32 9, i32 3)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str11, i32 0, i32 0), i32 %20)
  %21 = load %struct.arrayList** %list1, align 4
  %22 = call i32 @removeFromListByValue(%struct.arrayList* %21, i32 9)
  call void @printLog(i8* getelementptr inbounds ([35 x i8]* @.str12, i32 0, i32 0), i8* getelementptr inbounds ([21 x i8]* @.str13, i32 0, i32 0), i32 %22)
  %23 = load %struct.arrayList** %list1, align 4
  %24 = call i32 @insertToList(%struct.arrayList* %23, i32 0, i32 3)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str14, i32 0, i32 0), i32 %24)
  %25 = load %struct.arrayList** %list1, align 4
  %26 = call i32 @insertToList(%struct.arrayList* %25, i32 6, i32 4)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str15, i32 0, i32 0), i32 %26)
  %27 = load %struct.arrayList** %list2, align 4
  %28 = call i32 @insertToList(%struct.arrayList* %27, i32 7, i32 0)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str16, i32 0, i32 0), i32 %28)
  %29 = load %struct.arrayList** %list2, align 4
  %30 = call i32 @insertToList(%struct.arrayList* %29, i32 0, i32 0)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str17, i32 0, i32 0), i32 %30)
  %31 = load %struct.arrayList** %list2, align 4
  %32 = call i32 @insertToList(%struct.arrayList* %31, i32 9, i32 0)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str18, i32 0, i32 0), i32 %32)
  %33 = load %struct.arrayList** %list2, align 4
  %34 = call i32 @insertToList(%struct.arrayList* %33, i32 2, i32 0)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str19, i32 0, i32 0), i32 %34)
  %35 = load %struct.arrayList** %list2, align 4
  %36 = call i32 @insertToList(%struct.arrayList* %35, i32 4, i32 0)
  call void @printLog(i8* getelementptr inbounds ([25 x i8]* @.str7, i32 0, i32 0), i8* getelementptr inbounds ([11 x i8]* @.str20, i32 0, i32 0), i32 %36)
  %37 = load %struct.arrayList** %list1, align 4
  call void @deleteList(%struct.arrayList* %37)
  call void @printLog(i8* getelementptr inbounds ([22 x i8]* @.str21, i32 0, i32 0), i8* getelementptr inbounds ([6 x i8]* @.str22, i32 0, i32 0), i32 0)
  %38 = load %struct.arrayList** %list2, align 4
  call void @deleteList(%struct.arrayList* %38)
  call void @printLog(i8* getelementptr inbounds ([22 x i8]* @.str21, i32 0, i32 0), i8* getelementptr inbounds ([6 x i8]* @.str23, i32 0, i32 0), i32 0)
  ret i32 0
}
