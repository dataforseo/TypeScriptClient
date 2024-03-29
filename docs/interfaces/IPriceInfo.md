[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IPriceInfo

# Interface: IPriceInfo

## Implemented by

- [`PriceInfo`](../classes/PriceInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [currency](IPriceInfo.md#currency)
- [current](IPriceInfo.md#current)
- [displayed\_price](IPriceInfo.md#displayed_price)
- [is\_price\_range](IPriceInfo.md#is_price_range)
- [max\_value](IPriceInfo.md#max_value)
- [regular](IPriceInfo.md#regular)

## Properties

### currency

• `Optional` **currency**: `string`

currency of the listed price
ISO code of the currency applied to the price

#### Defined in

[main.ts:21532](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21532)

___


### current

• `Optional` **current**: `number`

current price
indicates the current price of the product or service featured in the result

#### Defined in

[main.ts:21523](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21523)

___


### displayed\_price

• `Optional` **displayed\_price**: `string`

price string in the result
raw price string as provided in the result

#### Defined in

[main.ts:21538](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21538)

___


### is\_price\_range

• `Optional` **is\_price\_range**: `boolean`

price is provided as a range
indicates whether a price is provided in a range

#### Defined in

[main.ts:21535](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21535)

___


### max\_value

• `Optional` **max\_value**: `number`

the maximum price
the maximum price of the product or service as indicated in the result

#### Defined in

[main.ts:21529](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21529)

___


### regular

• `Optional` **regular**: `number`

regular price
indicates the regular price of the product or service with no discounts applied

#### Defined in

[main.ts:21526](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21526)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")