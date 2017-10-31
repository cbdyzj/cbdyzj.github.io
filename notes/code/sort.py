#!/usr/bin/env python

# quick sort
def partition(arr, low, high):
    pivot = arr[low]
    begin = low
    end = high
    while(high - low > 0):
        while(arr[high] > pivot and high - low > 0): high -= 1
        arr[low] = arr[high]
        while(arr[low] <= pivot and high - low > 0): low += 1
        arr[high] = arr[low]
    arr[low] = pivot
    if(end - begin > 0):
        if(low is not 0): partition(arr,begin,low - 1)
        if(end > low): partition(arr,low + 1,end)

def quick_sort(arr):
    partition(arr,0,len(arr)-1)
    return arr


# merge sort
def merge(arr1,arr2):
    arr3 = []
    len1 = len(arr1)
    len2 = len(arr2)
    i1 = 0
    i2 = 0
    while(i1 < len1 and i2 < len2):
        if(arr1[i1] < arr2[i2]):
            arr3.append(arr1[i1])
            i1 += 1
        else :
            arr3.append(arr2[i2])
            i2 += 1
    while(i1 < len1):
        arr3.append(arr1[i1])
        i1 += 1
    while(i2 < len2):
        arr3.append(arr2[i2])
        i2 += 1
    return arr3

def merge_sort(arr):
    length = len(arr)
    if(length > 1):
        arr1 = merge_sort(arr[0:length//2])
        arr2 = merge_sort(arr[length//2:length])
        return merge(arr1,arr2)
    return arr

if __name__ == "__main__":
    arr = [4,0,9,1,2,3,2,6,7,5]
    print(merge_sort(arr))
    print(quick_sort(arr))