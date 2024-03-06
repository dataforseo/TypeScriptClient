[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / TrustpilotSearchOrganicBusinessDataSerpElementItem

# Class: TrustpilotSearchOrganicBusinessDataSerpElementItem

## Hierarchy

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)
  
  ↳ **`TrustpilotSearchOrganicBusinessDataSerpElementItem`**

## Implements

- [`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](TrustpilotSearchOrganicBusinessDataSerpElementItem.md#constructor)

### Properties

- [\_discriminator](TrustpilotSearchOrganicBusinessDataSerpElementItem.md#_discriminator)
- [domain](TrustpilotSearchOrganicBusinessDataSerpElementItem.md#domain)
- [rank\_absolute](TrustpilotSearchOrganicBusinessDataSerpElementItem.md#rank_absolute)
- [rank\_group](TrustpilotSearchOrganicBusinessDataSerpElementItem.md#rank_group)
- [rating](TrustpilotSearchOrganicBusinessDataSerpElementItem.md#rating)
- [reviews\_count](TrustpilotSearchOrganicBusinessDataSerpElementItem.md#reviews_count)
- [title](TrustpilotSearchOrganicBusinessDataSerpElementItem.md#title)
- [url](TrustpilotSearchOrganicBusinessDataSerpElementItem.md#url)

### Methods

- [init](TrustpilotSearchOrganicBusinessDataSerpElementItem.md#init)
- [toJSON](TrustpilotSearchOrganicBusinessDataSerpElementItem.md#tojson)
- [fromJS](TrustpilotSearchOrganicBusinessDataSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new TrustpilotSearchOrganicBusinessDataSerpElementItem**(`data?`): [`TrustpilotSearchOrganicBusinessDataSerpElementItem`](TrustpilotSearchOrganicBusinessDataSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md) |

#### Returns

[`TrustpilotSearchOrganicBusinessDataSerpElementItem`](TrustpilotSearchOrganicBusinessDataSerpElementItem.md)

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[constructor](BaseBusinessDataSerpElementItem.md#constructor)

#### Defined in

[main.ts:199130](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199130)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[_discriminator](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:20076](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20076)

___


### domain

• `Optional` **domain**: `string`

domain of the establishment

#### Implementation of

[ITrustpilotSearchOrganicBusinessDataSerpElementItem](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[domain](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#domain)

#### Defined in

[main.ts:199120](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199120)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Implementation of

[ITrustpilotSearchOrganicBusinessDataSerpElementItem](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[rank_absolute](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:199116](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199116)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[ITrustpilotSearchOrganicBusinessDataSerpElementItem](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[rank_group](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#rank_group)

#### Defined in

[main.ts:199113](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199113)

___


### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the rating score of the establishment submitted by reviewers

#### Implementation of

[ITrustpilotSearchOrganicBusinessDataSerpElementItem](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[rating](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#rating)

#### Defined in

[main.ts:199126](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199126)

___


### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews

#### Implementation of

[ITrustpilotSearchOrganicBusinessDataSerpElementItem](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[reviews_count](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#reviews_count)

#### Defined in

[main.ts:199124](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199124)

___


### title

• `Optional` **title**: `string`

title of the establishment

#### Implementation of

[ITrustpilotSearchOrganicBusinessDataSerpElementItem](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[title](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#title)

#### Defined in

[main.ts:199118](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199118)

___


### url

• `Optional` **url**: `string`

URL to the establishment

#### Implementation of

[ITrustpilotSearchOrganicBusinessDataSerpElementItem](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[url](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#url)

#### Defined in

[main.ts:199122](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199122)

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

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[init](BaseBusinessDataSerpElementItem.md#init)

#### Defined in

[main.ts:199135](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199135)

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

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[toJSON](BaseBusinessDataSerpElementItem.md#tojson)

#### Defined in

[main.ts:199159](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199159)

___


### fromJS

▸ **fromJS**(`data`): [`TrustpilotSearchOrganicBusinessDataSerpElementItem`](TrustpilotSearchOrganicBusinessDataSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TrustpilotSearchOrganicBusinessDataSerpElementItem`](TrustpilotSearchOrganicBusinessDataSerpElementItem.md)

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[fromJS](BaseBusinessDataSerpElementItem.md#fromjs)

#### Defined in

[main.ts:199152](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199152)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")