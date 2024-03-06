[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / CurrencyBoxSerpElementItem

# Class: CurrencyBoxSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)
  
  ↳ **`CurrencyBoxSerpElementItem`**

## Implements

- [`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](CurrencyBoxSerpElementItem.md#constructor)

### Properties

- [\_discriminator](CurrencyBoxSerpElementItem.md#_discriminator)
- [converted\_currency](CurrencyBoxSerpElementItem.md#converted_currency)
- [converted\_value](CurrencyBoxSerpElementItem.md#converted_value)
- [currency](CurrencyBoxSerpElementItem.md#currency)
- [graph](CurrencyBoxSerpElementItem.md#graph)
- [position](CurrencyBoxSerpElementItem.md#position)
- [rank\_absolute](CurrencyBoxSerpElementItem.md#rank_absolute)
- [rank\_group](CurrencyBoxSerpElementItem.md#rank_group)
- [rectangle](CurrencyBoxSerpElementItem.md#rectangle)
- [table](CurrencyBoxSerpElementItem.md#table)
- [timestamp](CurrencyBoxSerpElementItem.md#timestamp)
- [value](CurrencyBoxSerpElementItem.md#value)
- [xpath](CurrencyBoxSerpElementItem.md#xpath)

### Methods

- [init](CurrencyBoxSerpElementItem.md#init)
- [toJSON](CurrencyBoxSerpElementItem.md#tojson)
- [fromJS](CurrencyBoxSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new CurrencyBoxSerpElementItem**(`data?`): [`CurrencyBoxSerpElementItem`](CurrencyBoxSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ICurrencyBoxSerpElementItem`](../interfaces/ICurrencyBoxSerpElementItem.md) |

#### Returns

[`CurrencyBoxSerpElementItem`](CurrencyBoxSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:34206](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34206)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___


### converted\_currency

• `Optional` **converted\_currency**: `string`

converted currency

#### Implementation of

[ICurrencyBoxSerpElementItem](../interfaces/ICurrencyBoxSerpElementItem.md).[converted_currency](../interfaces/ICurrencyBoxSerpElementItem.md#converted_currency)

#### Defined in

[main.ts:34188](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34188)

___


### converted\_value

• `Optional` **converted\_value**: `number`

value converted to a requested currency
indicates the exact value based on Google Fincance data at the time when our API pulled the results
note that exchange rates displayed in the currency_box element may be delayed according to the Google Finance disclaimer

#### Implementation of

[ICurrencyBoxSerpElementItem](../interfaces/ICurrencyBoxSerpElementItem.md).[converted_value](../interfaces/ICurrencyBoxSerpElementItem.md#converted_value)

#### Defined in

[main.ts:34183](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34183)

___


### currency

• `Optional` **currency**: `string`

currency of the listed price
ISO code of the currency applied to the price

#### Implementation of

[ICurrencyBoxSerpElementItem](../interfaces/ICurrencyBoxSerpElementItem.md).[currency](../interfaces/ICurrencyBoxSerpElementItem.md#currency)

#### Defined in

[main.ts:34186](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34186)

___


### graph

• `Optional` **graph**: [`Graph`](Graph.md)

contains data provided in the graph of the element

#### Implementation of

[ICurrencyBoxSerpElementItem](../interfaces/ICurrencyBoxSerpElementItem.md).[graph](../interfaces/ICurrencyBoxSerpElementItem.md#graph)

#### Defined in

[main.ts:34198](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34198)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[ICurrencyBoxSerpElementItem](../interfaces/ICurrencyBoxSerpElementItem.md).[position](../interfaces/ICurrencyBoxSerpElementItem.md#position)

#### Defined in

[main.ts:34175](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34175)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[ICurrencyBoxSerpElementItem](../interfaces/ICurrencyBoxSerpElementItem.md).[rank_absolute](../interfaces/ICurrencyBoxSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:34171](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34171)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[ICurrencyBoxSerpElementItem](../interfaces/ICurrencyBoxSerpElementItem.md).[rank_group](../interfaces/ICurrencyBoxSerpElementItem.md#rank_group)

#### Defined in

[main.ts:34168](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34168)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[ICurrencyBoxSerpElementItem](../interfaces/ICurrencyBoxSerpElementItem.md).[rectangle](../interfaces/ICurrencyBoxSerpElementItem.md#rectangle)

#### Defined in

[main.ts:34202](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34202)

___


### table

• `Optional` **table**: [`Table`](Table.md)

results table
if there are none, equals null

#### Implementation of

[ICurrencyBoxSerpElementItem](../interfaces/ICurrencyBoxSerpElementItem.md).[table](../interfaces/ICurrencyBoxSerpElementItem.md#table)

#### Defined in

[main.ts:34196](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34196)

___


### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ICurrencyBoxSerpElementItem](../interfaces/ICurrencyBoxSerpElementItem.md).[timestamp](../interfaces/ICurrencyBoxSerpElementItem.md#timestamp)

#### Defined in

[main.ts:34193](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34193)

___


### value

• `Optional` **value**: `number`

the value of the rating

#### Implementation of

[ICurrencyBoxSerpElementItem](../interfaces/ICurrencyBoxSerpElementItem.md).[value](../interfaces/ICurrencyBoxSerpElementItem.md#value)

#### Defined in

[main.ts:34179](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34179)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[ICurrencyBoxSerpElementItem](../interfaces/ICurrencyBoxSerpElementItem.md).[xpath](../interfaces/ICurrencyBoxSerpElementItem.md#xpath)

#### Defined in

[main.ts:34177](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34177)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[init](BaseSerpElementItem.md#init)

#### Defined in

[main.ts:34211](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34211)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[toJSON](BaseSerpElementItem.md#tojson)

#### Defined in

[main.ts:34240](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34240)

___


### fromJS

▸ **fromJS**(`data`): [`CurrencyBoxSerpElementItem`](CurrencyBoxSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`CurrencyBoxSerpElementItem`](CurrencyBoxSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:34233](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34233)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")