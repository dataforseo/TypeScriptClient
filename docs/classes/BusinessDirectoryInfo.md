**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDirectoryInfo

# Class: BusinessDirectoryInfo

## Implements

- [`IBusinessDirectoryInfo`](../interfaces/IBusinessDirectoryInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDirectoryInfo(data)

> **new BusinessDirectoryInfo**(`data`?): [`BusinessDirectoryInfo`](BusinessDirectoryInfo.md)

#### Parameters

• **data?**: [`IBusinessDirectoryInfo`](../interfaces/IBusinessDirectoryInfo.md)

#### Returns

[`BusinessDirectoryInfo`](BusinessDirectoryInfo.md)

#### Source

main.ts:199127

## Properties

### items?

> **`optional`** **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

encountered item types
types of search engine results encountered in the items array;
possible item types: google_business_info

#### Implementation of

[`IBusinessDirectoryInfo`](../interfaces/IBusinessDirectoryInfo.md).[`items`](../interfaces/IBusinessDirectoryInfo.md#items)

#### Source

main.ts:199123

***

### title?

> **`optional`** **title**: `string`

title of the element
domain of the online menu system

#### Implementation of

[`IBusinessDirectoryInfo`](../interfaces/IBusinessDirectoryInfo.md).[`title`](../interfaces/IBusinessDirectoryInfo.md#title)

#### Source

main.ts:199119

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:199136

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:199158

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDirectoryInfo`](BusinessDirectoryInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDirectoryInfo`](BusinessDirectoryInfo.md)

#### Source

main.ts:199151
