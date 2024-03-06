[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBacklinksInfo

# Interface: IBacklinksInfo

## Implemented by

- [`BacklinksInfo`](../classes/BacklinksInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [backlinks](IBacklinksInfo.md#backlinks)
- [dofollow](IBacklinksInfo.md#dofollow)
- [referring\_domains](IBacklinksInfo.md#referring_domains)
- [referring\_main\_domains](IBacklinksInfo.md#referring_main_domains)
- [referring\_pages](IBacklinksInfo.md#referring_pages)
- [time\_update](IBacklinksInfo.md#time_update)

## Properties

### backlinks

• `Optional` **backlinks**: `number`

total number of backlinks
the total number of backlinks, including dofollow and nofollow links

#### Defined in

[main.ts:76062](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76062)

___


### dofollow

• `Optional` **dofollow**: `number`

number of dofollow links

#### Defined in

[main.ts:76059](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76059)

___


### referring\_domains

• `Optional` **referring\_domains**: `number`

number of referring domains

#### Defined in

[main.ts:76053](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76053)

___


### referring\_main\_domains

• `Optional` **referring\_main\_domains**: `number`

number of referring main domains

#### Defined in

[main.ts:76055](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76055)

___


### referring\_pages

• `Optional` **referring\_pages**: `number`

number of referring pages

#### Defined in

[main.ts:76057](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76057)

___


### time\_update

• `Optional` **time\_update**: `string`

date and time when backlink data was updated
in the UTC format: "yyyy-mm-dd hh-mm-ss +00:00"
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:76067](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76067)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")