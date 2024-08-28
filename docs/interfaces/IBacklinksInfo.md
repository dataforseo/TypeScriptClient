[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IBacklinksInfo

# Interface: IBacklinksInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### backlinks?

> `optional` **backlinks**: `number`

total number of backlinks
the total number of backlinks, including dofollow and nofollow links

#### Defined in

main.ts:81145

***

### dofollow?

> `optional` **dofollow**: `number`

number of dofollow links

#### Defined in

main.ts:81142

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

number of referring domains

#### Defined in

main.ts:81136

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

number of referring main domains

#### Defined in

main.ts:81138

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

number of referring pages

#### Defined in

main.ts:81140

***

### time\_update?

> `optional` **time\_update**: `string`

date and time when backlink data was updated
in the UTC format: "yyyy-mm-dd hh-mm-ss +00:00"
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:81150
