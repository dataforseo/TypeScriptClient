**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleCategoriesForDomainLiveItem

# Class: DataforseoLabsGoogleCategoriesForDomainLiveItem

## Implements

- [`IDataforseoLabsGoogleCategoriesForDomainLiveItem`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleCategoriesForDomainLiveItem(data)

> **new DataforseoLabsGoogleCategoriesForDomainLiveItem**(`data`?): [`DataforseoLabsGoogleCategoriesForDomainLiveItem`](DataforseoLabsGoogleCategoriesForDomainLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleCategoriesForDomainLiveItem`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveItem.md)

#### Returns

[`DataforseoLabsGoogleCategoriesForDomainLiveItem`](DataforseoLabsGoogleCategoriesForDomainLiveItem.md)

#### Source

main.ts:86792

## Properties

### categories?

> **`optional`** **categories**: `number`[]

product and service categories
you can download the full list of possible categories

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveItem`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveItem.md).[`categories`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveItem.md#categories)

#### Source

main.ts:86786

***

### metrics?

> **`optional`** **metrics**: `Object`

ranking data relevant to the specified domain or subdomain

#### Index signature

 \[`key`: `string`\]: [`MetricsInfo`](MetricsInfo.md)

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveItem`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveItem.md#metrics)

#### Source

main.ts:86788

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveItem`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveItem.md#se_type)

#### Source

main.ts:86783

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:86801

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:86830

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleCategoriesForDomainLiveItem`](DataforseoLabsGoogleCategoriesForDomainLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleCategoriesForDomainLiveItem`](DataforseoLabsGoogleCategoriesForDomainLiveItem.md)

#### Source

main.ts:86823
