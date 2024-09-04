[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDirectoryInfo

# Class: BusinessDirectoryInfo

## Implements

- [`IBusinessDirectoryInfo`](../interfaces/IBusinessDirectoryInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDirectoryInfo()

> **new BusinessDirectoryInfo**(`data`?): [`BusinessDirectoryInfo`](BusinessDirectoryInfo.md)

#### Parameters

• **data?**: [`IBusinessDirectoryInfo`](../interfaces/IBusinessDirectoryInfo.md)

#### Returns

[`BusinessDirectoryInfo`](BusinessDirectoryInfo.md)

#### Defined in

main.ts:201318

## Properties

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

encountered item types
types of search engine results encountered in the items array;
possible item types: google_business_info

#### Implementation of

[`IBusinessDirectoryInfo`](../interfaces/IBusinessDirectoryInfo.md).[`items`](../interfaces/IBusinessDirectoryInfo.md#items)

#### Defined in

main.ts:201314

***

### title?

> `optional` **title**: `string`

title of the element
domain of the online menu system

#### Implementation of

[`IBusinessDirectoryInfo`](../interfaces/IBusinessDirectoryInfo.md).[`title`](../interfaces/IBusinessDirectoryInfo.md#title)

#### Defined in

main.ts:201310

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:201327

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:201349

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDirectoryInfo`](BusinessDirectoryInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDirectoryInfo`](BusinessDirectoryInfo.md)

#### Defined in

main.ts:201342
