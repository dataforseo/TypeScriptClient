**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / StoresCountInfo

# Class: StoresCountInfo

## Implements

- [`IStoresCountInfo`](../interfaces/IStoresCountInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new StoresCountInfo(data)

> **new StoresCountInfo**(`data`?): [`StoresCountInfo`](StoresCountInfo.md)

#### Parameters

• **data?**: [`IStoresCountInfo`](../interfaces/IStoresCountInfo.md)

#### Returns

[`StoresCountInfo`](StoresCountInfo.md)

#### Source

main.ts:176614

## Properties

### count?

> **`optional`** **count**: `string`

number of stores that offer the product

#### Implementation of

[`IStoresCountInfo`](../interfaces/IStoresCountInfo.md).[`count`](../interfaces/IStoresCountInfo.md#count)

#### Source

main.ts:176602

***

### count\_from\_text?

> **`optional`** **count\_from\_text**: `boolean`

whether the number of stores is taken from text
indicates whether the number of stores is taken from displayed_text;
if the API finds the exact number of stores in the HTML code of the Google Shopping page, this parameter is false;
if the API cannot find the number of stores in the HTML code of the page, it takes the number from the displayed_text;
in this case, the parameter is true

#### Implementation of

[`IStoresCountInfo`](../interfaces/IStoresCountInfo.md).[`count_from_text`](../interfaces/IStoresCountInfo.md#count_from_text)

#### Source

main.ts:176610

***

### displayed\_text?

> **`optional`** **displayed\_text**: `string`

text displayed on the Google Shopping page

#### Implementation of

[`IStoresCountInfo`](../interfaces/IStoresCountInfo.md).[`displayed_text`](../interfaces/IStoresCountInfo.md#displayed_text)

#### Source

main.ts:176604

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:176623

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:176642

***

### fromJS()

> **`static`** **fromJS**(`data`): [`StoresCountInfo`](StoresCountInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`StoresCountInfo`](StoresCountInfo.md)

#### Source

main.ts:176635
