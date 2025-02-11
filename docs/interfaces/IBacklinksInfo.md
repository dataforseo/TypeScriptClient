[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksInfo

# Interface: IBacklinksInfo

Defined in: main.ts:89587

## Indexable

\[`key`: `string`\]: `any`

## Properties

### backlinks?

> `optional` **backlinks**: `number`

Defined in: main.ts:89598

total number of backlinks
the total number of backlinks, including dofollow and nofollow links

***

### dofollow?

> `optional` **dofollow**: `number`

Defined in: main.ts:89595

number of dofollow links

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

Defined in: main.ts:89589

number of referring domains

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

Defined in: main.ts:89591

number of referring main domains

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

Defined in: main.ts:89593

number of referring pages

***

### time\_update?

> `optional` **time\_update**: `string`

Defined in: main.ts:89603

date and time when backlink data was updated
in the UTC format: "yyyy-mm-dd hh-mm-ss +00:00"
example:
2019-11-15 12:57:46 +00:00
