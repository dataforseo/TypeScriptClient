[Documentation](../README.md) / [Exports](../modules.md) / OnPageKeywordDensityItem

# Class: OnPageKeywordDensityItem

## Implements

- [`IOnPageKeywordDensityItem`](../interfaces/IOnPageKeywordDensityItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageKeywordDensityItem.md#constructor)

### Properties

- [density](OnPageKeywordDensityItem.md#density)
- [frequency](OnPageKeywordDensityItem.md#frequency)
- [keyword](OnPageKeywordDensityItem.md#keyword)

### Methods

- [init](OnPageKeywordDensityItem.md#init)
- [toJSON](OnPageKeywordDensityItem.md#tojson)
- [fromJS](OnPageKeywordDensityItem.md#fromjs)

## Constructors

### constructor

• **new OnPageKeywordDensityItem**(`data?`): [`OnPageKeywordDensityItem`](OnPageKeywordDensityItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageKeywordDensityItem`](../interfaces/IOnPageKeywordDensityItem.md) |

#### Returns

[`OnPageKeywordDensityItem`](OnPageKeywordDensityItem.md)

#### Defined in

main.ts:150387

## Properties

### density

• `Optional` **density**: `number`

keyword density
calculated as a ratio of frequency to the total count of keywords with the set keyword_length on the web page or website

#### Implementation of

[IOnPageKeywordDensityItem](../interfaces/IOnPageKeywordDensityItem.md).[density](../interfaces/IOnPageKeywordDensityItem.md#density)

#### Defined in

main.ts:150383

___

### frequency

• `Optional` **frequency**: `number`

keyword frequency
number of times the keyword appears on the website (or webpage if you specified a url)

#### Implementation of

[IOnPageKeywordDensityItem](../interfaces/IOnPageKeywordDensityItem.md).[frequency](../interfaces/IOnPageKeywordDensityItem.md#frequency)

#### Defined in

main.ts:150380

___

### keyword

• `Optional` **keyword**: `string`

returned keyword

#### Implementation of

[IOnPageKeywordDensityItem](../interfaces/IOnPageKeywordDensityItem.md).[keyword](../interfaces/IOnPageKeywordDensityItem.md#keyword)

#### Defined in

main.ts:150377

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:150396

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:150415

___

### fromJS

▸ **fromJS**(`data`): [`OnPageKeywordDensityItem`](OnPageKeywordDensityItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageKeywordDensityItem`](OnPageKeywordDensityItem.md)

#### Defined in

main.ts:150408
