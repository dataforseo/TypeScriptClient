[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IStoresCountInfo

# Interface: IStoresCountInfo

## Implemented by

- [`StoresCountInfo`](../classes/StoresCountInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [count](IStoresCountInfo.md#count)
- [count\_from\_text](IStoresCountInfo.md#count_from_text)
- [displayed\_text](IStoresCountInfo.md#displayed_text)

## Properties

### count

• `Optional` **count**: `string`

number of stores that offer the product

#### Defined in

[main.ts:164640](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164640)

___


### count\_from\_text

• `Optional` **count\_from\_text**: `boolean`

whether the number of stores is taken from text
indicates whether the number of stores is taken from displayed_text;
if the API finds the exact number of stores in the HTML code of the Google Shopping page, this parameter is false;
if the API cannot find the number of stores in the HTML code of the page, it takes the number from the displayed_text;
in this case, the parameter is true

#### Defined in

[main.ts:164648](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164648)

___


### displayed\_text

• `Optional` **displayed\_text**: `string`

text displayed on the Google Shopping page

#### Defined in

[main.ts:164642](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164642)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")