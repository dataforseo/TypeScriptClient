[**Documentation**](../README.md)

***

[Documentation](../README.md) / StoresCountInfo

# Class: StoresCountInfo

Defined in: main.ts:186554

## Implements

- [`IStoresCountInfo`](../interfaces/IStoresCountInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new StoresCountInfo()

> **new StoresCountInfo**(`data`?): [`StoresCountInfo`](StoresCountInfo.md)

Defined in: main.ts:186568

#### Parameters

##### data?

[`IStoresCountInfo`](../interfaces/IStoresCountInfo.md)

#### Returns

[`StoresCountInfo`](StoresCountInfo.md)

## Properties

### count?

> `optional` **count**: `string`

Defined in: main.ts:186556

number of stores that offer the product

#### Implementation of

[`IStoresCountInfo`](../interfaces/IStoresCountInfo.md).[`count`](../interfaces/IStoresCountInfo.md#count)

***

### count\_from\_text?

> `optional` **count\_from\_text**: `boolean`

Defined in: main.ts:186564

whether the number of stores is taken from text
indicates whether the number of stores is taken from displayed_text;
if the API finds the exact number of stores in the HTML code of the Google Shopping page, this parameter is false;
if the API cannot find the number of stores in the HTML code of the page, it takes the number from the displayed_text;
in this case, the parameter is true

#### Implementation of

[`IStoresCountInfo`](../interfaces/IStoresCountInfo.md).[`count_from_text`](../interfaces/IStoresCountInfo.md#count_from_text)

***

### displayed\_text?

> `optional` **displayed\_text**: `string`

Defined in: main.ts:186558

text displayed on the Google Shopping page

#### Implementation of

[`IStoresCountInfo`](../interfaces/IStoresCountInfo.md).[`displayed_text`](../interfaces/IStoresCountInfo.md#displayed_text)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:186577

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:186596

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`StoresCountInfo`](StoresCountInfo.md)

Defined in: main.ts:186589

#### Parameters

##### data

`any`

#### Returns

[`StoresCountInfo`](StoresCountInfo.md)
