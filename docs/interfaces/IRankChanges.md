[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IRankChanges

# Interface: IRankChanges

## Implemented by

- [`RankChanges`](../classes/RankChanges.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [is\_down](IRankChanges.md#is_down)
- [is\_new](IRankChanges.md#is_new)
- [is\_up](IRankChanges.md#is_up)
- [previous\_rank\_absolute](IRankChanges.md#previous_rank_absolute)

## Properties

### is\_down

• `Optional` **is\_down**: `boolean`

rank of this element went down
if the value is true, position of the element in SERP is lower compared to the previous check

#### Defined in

[main.ts:86553](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86553)

___


### is\_new

• `Optional` **is\_new**: `boolean`

element was previously present in SERP
if the value is true, previously collected SERP didn’t contain this element

#### Defined in

[main.ts:86547](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86547)

___


### is\_up

• `Optional` **is\_up**: `boolean`

rank of this element went up
if the value is true, position of the element in SERP is higher compared to the previous check

#### Defined in

[main.ts:86550](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86550)

___


### previous\_rank\_absolute

• `Optional` **previous\_rank\_absolute**: `number`

previous absolute rank in SERP
indicates previous rank of the element in Google SERP;
if this element is new, the value will be null

#### Defined in

[main.ts:86544](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86544)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")