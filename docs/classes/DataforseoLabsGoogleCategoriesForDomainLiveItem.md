[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleCategoriesForDomainLiveItem

# Class: DataforseoLabsGoogleCategoriesForDomainLiveItem

## Implements

- [`IDataforseoLabsGoogleCategoriesForDomainLiveItem`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleCategoriesForDomainLiveItem()

> **new DataforseoLabsGoogleCategoriesForDomainLiveItem**(`data`?): [`DataforseoLabsGoogleCategoriesForDomainLiveItem`](DataforseoLabsGoogleCategoriesForDomainLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleCategoriesForDomainLiveItem`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveItem.md)

#### Returns

[`DataforseoLabsGoogleCategoriesForDomainLiveItem`](DataforseoLabsGoogleCategoriesForDomainLiveItem.md)

#### Defined in

main.ts:87794

## Properties

### categories?

> `optional` **categories**: `number`[]

product and service categories
you can download the full list of possible categories

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveItem`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveItem.md).[`categories`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveItem.md#categories)

#### Defined in

main.ts:87788

***

### metrics?

> `optional` **metrics**: `object`

ranking data relevant to the specified domain or subdomain

#### Index Signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveItem`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveItem.md#metrics)

#### Defined in

main.ts:87790

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveItem`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveItem.md#se_type)

#### Defined in

main.ts:87785

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:87803

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:87832

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleCategoriesForDomainLiveItem`](DataforseoLabsGoogleCategoriesForDomainLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleCategoriesForDomainLiveItem`](DataforseoLabsGoogleCategoriesForDomainLiveItem.md)

#### Defined in

main.ts:87825
