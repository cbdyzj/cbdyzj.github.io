
typedef struct LinkNode {
    ElementType  data;
    struct LinkNode *next;
} node;

//迭代方法
node* reverse(node *head) {
    if(head == NULL || head->next == NULL)
        return head;
    node *p1 = head;
    node *p2 = p1->next;
    node *p3 = p2->next;
    p1->next = NULL;
         
    while(p3 != NULL) {
        p2->next = p1;
        p1 = p2;
        p2 = p3;
        p3 = p3->next;
    }
    p2->next = p1;
    head = p2;

    return head;
}

//递归方法
node* reverse(node *head) {
    if(head == NULL || head->next == NULL) {
        return head;
    }
    node *p1 = head;
    node *p2 = head->next;
    head = reverse(p2);
    p2->next = p1;
    p1->next = NULL;
    return head;
}
