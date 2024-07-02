**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBacklinksInfo

# Interface: IBacklinksInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### backlinks?

> **`optional`** **backlinks**: `number`

total number of backlinks
the total number of backlinks, including dofollow and nofollow links

#### Source

main.ts:80026

***

### dofollow?

> **`optional`** **dofollow**: `number`

number of dofollow links

#### Source

main.ts:80023

***

### referring\_domains?

> **`optional`** **referring\_domains**: `number`

number of referring domains

#### Source

main.ts:80017

***

### referring\_main\_domains?

> **`optional`** **referring\_main\_domains**: `number`

number of referring main domains

#### Source

main.ts:80019

***

### referring\_pages?

> **`optional`** **referring\_pages**: `number`

number of referring pages

#### Source

main.ts:80021

***

### time\_update?

> **`optional`** **time\_update**: `string`

date and time when backlink data was updated
in the UTC format: "yyyy-mm-dd hh-mm-ss +00:00"
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:80031
