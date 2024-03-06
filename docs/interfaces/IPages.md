[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IPages

# Interface: IPages

## Implemented by

- [`Pages`](../classes/Pages.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [page](IPages.md#page)
- [similarity](IPages.md#similarity)

## Properties

### page

• `Optional` **page**: [`BaseOnPageResourceItemInfo`](../classes/BaseOnPageResourceItemInfo.md)[]

information about the page with duplicate content

#### Defined in

[main.ts:147608](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147608)

___


### similarity

• `Optional` **similarity**: `number`

content similarity score
by default, the content is considered duplicate if the value is greater than or equals 6
can take values from 0 to 10

#### Defined in

[main.ts:147606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147606)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")