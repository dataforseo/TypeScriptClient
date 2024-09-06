[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / StoresCountInfo

# Class: StoresCountInfo

## Implements

- [`IStoresCountInfo`](../interfaces/IStoresCountInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new StoresCountInfo()

> **new StoresCountInfo**(`data`?): [`StoresCountInfo`](StoresCountInfo.md)

#### Parameters

• **data?**: [`IStoresCountInfo`](../interfaces/IStoresCountInfo.md)

#### Returns

[`StoresCountInfo`](StoresCountInfo.md)

#### Defined in

main.ts:174409

## Properties

### count?

> `optional` **count**: `string`

number of stores that offer the product

#### Implementation of

[`IStoresCountInfo`](../interfaces/IStoresCountInfo.md).[`count`](../interfaces/IStoresCountInfo.md#count)

#### Defined in

main.ts:174397

***

### count\_from\_text?

> `optional` **count\_from\_text**: `boolean`

whether the number of stores is taken from text
indicates whether the number of stores is taken from displayed_text;
if the API finds the exact number of stores in the HTML code of the Google Shopping page, this parameter is false;
if the API cannot find the number of stores in the HTML code of the page, it takes the number from the displayed_text;
in this case, the parameter is true

#### Implementation of

[`IStoresCountInfo`](../interfaces/IStoresCountInfo.md).[`count_from_text`](../interfaces/IStoresCountInfo.md#count_from_text)

#### Defined in

main.ts:174405

***

### displayed\_text?

> `optional` **displayed\_text**: `string`

text displayed on the Google Shopping page

#### Implementation of

[`IStoresCountInfo`](../interfaces/IStoresCountInfo.md).[`displayed_text`](../interfaces/IStoresCountInfo.md#displayed_text)

#### Defined in

main.ts:174399

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:174418

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:174437

***

### fromJS()

> `static` **fromJS**(`data`): [`StoresCountInfo`](StoresCountInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`StoresCountInfo`](StoresCountInfo.md)

#### Defined in

main.ts:174430
