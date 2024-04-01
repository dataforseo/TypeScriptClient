[Documentation](../README.md) / [Exports](../modules.md) / RatingInfo

# Class: RatingInfo

## Implements

- [`IRatingInfo`](../interfaces/IRatingInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](RatingInfo.md#constructor)

### Properties

- [rating\_max](RatingInfo.md#rating_max)
- [rating\_type](RatingInfo.md#rating_type)
- [value](RatingInfo.md#value)
- [votes\_count](RatingInfo.md#votes_count)

### Methods

- [init](RatingInfo.md#init)
- [toJSON](RatingInfo.md#tojson)
- [fromJS](RatingInfo.md#fromjs)

## Constructors

### constructor

• **new RatingInfo**(`data?`): [`RatingInfo`](RatingInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IRatingInfo`](../interfaces/IRatingInfo.md) |

#### Returns

[`RatingInfo`](RatingInfo.md)

#### Defined in

main.ts:28514

## Properties

### rating\_max

• `Optional` **rating\_max**: `number`

the maximum value for a rating_type

#### Implementation of

[IRatingInfo](../interfaces/IRatingInfo.md).[rating_max](../interfaces/IRatingInfo.md#rating_max)

#### Defined in

main.ts:28510

___

### rating\_type

• `Optional` **rating\_type**: `string`

the type of rating
here you can find the following elements: Max5, Percents, CustomMax

#### Implementation of

[IRatingInfo](../interfaces/IRatingInfo.md).[rating_type](../interfaces/IRatingInfo.md#rating_type)

#### Defined in

main.ts:28504

___

### value

• `Optional` **value**: `number`

the value of the rating

#### Implementation of

[IRatingInfo](../interfaces/IRatingInfo.md).[value](../interfaces/IRatingInfo.md#value)

#### Defined in

main.ts:28506

___

### votes\_count

• `Optional` **votes\_count**: `number`

the amount of feedback

#### Implementation of

[IRatingInfo](../interfaces/IRatingInfo.md).[votes_count](../interfaces/IRatingInfo.md#votes_count)

#### Defined in

main.ts:28508

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

main.ts:28523

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

main.ts:28543

___

### fromJS

▸ **fromJS**(`data`): [`RatingInfo`](RatingInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`RatingInfo`](RatingInfo.md)

#### Defined in

main.ts:28536
