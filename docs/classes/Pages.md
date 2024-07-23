**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / Pages

# Class: Pages

## Implements

- [`IPages`](../interfaces/IPages.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new Pages(data)

> **new Pages**(`data`?): [`Pages`](Pages.md)

#### Parameters

• **data?**: [`IPages`](../interfaces/IPages.md)

#### Returns

[`Pages`](Pages.md)

#### Source

main.ts:159116

## Properties

### page?

> **`optional`** **page**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

information about the page with duplicate content

#### Implementation of

[`IPages`](../interfaces/IPages.md).[`page`](../interfaces/IPages.md#page)

#### Source

main.ts:159112

***

### similarity?

> **`optional`** **similarity**: `number`

content similarity score
by default, the content is considered duplicate if the value is greater than or equals 6
can take values from 0 to 10

#### Implementation of

[`IPages`](../interfaces/IPages.md).[`similarity`](../interfaces/IPages.md#similarity)

#### Source

main.ts:159110

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:159125

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:159147

***

### fromJS()

> **`static`** **fromJS**(`data`): [`Pages`](Pages.md)

#### Parameters

• **data**: `any`

#### Returns

[`Pages`](Pages.md)

#### Source

main.ts:159140
