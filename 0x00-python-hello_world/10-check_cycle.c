#include "lists.h"

/**
 * check_cycle - checks a linked list if it contains a  cycle
 * @list: linked list passed
 * Return: 1 if the list has a cycle, else 0 if it doesn't
 */
int check_cycle(listint_t *list)
{
	listint_t *sl = list;
	listint_t *fa = list;

	if (!list)
		return (0);

	while (sl && fa && fa->next)
	{
		sl = sl->next;
		fa = fa->next->next;
		if (sl == fa)
			return (1);
	}

	return (0);
}
