**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / Redirect

# Class: Redirect

## Implements

- [`IRedirect`](../interfaces/IRedirect.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new Redirect(data)

> **new Redirect**(`data`?): [`Redirect`](Redirect.md)

#### Parameters

• **data?**: [`IRedirect`](../interfaces/IRedirect.md)

#### Returns

[`Redirect`](Redirect.md)

#### Source

main.ts:137877

## Properties

### status\_code?

> **`optional`** **status\_code**: `number`

HTTP status code of the URL

#### Implementation of

[`IRedirect`](../interfaces/IRedirect.md).[`status_code`](../interfaces/IRedirect.md#status_code)

#### Source

main.ts:137871

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IRedirect`](../interfaces/IRedirect.md).[`type`](../interfaces/IRedirect.md#type)

#### Source

main.ts:137869

***

### url?

> **`optional`** **url**: `string`

indirect link URL

#### Implementation of

[`IRedirect`](../interfaces/IRedirect.md).[`url`](../interfaces/IRedirect.md#url)

#### Source

main.ts:137873

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:137886

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:137905

***

### fromJS()

> **`static`** **fromJS**(`data`): [`Redirect`](Redirect.md)

#### Parameters

• **data**: `any`

#### Returns

[`Redirect`](Redirect.md)

#### Source

main.ts:137898
