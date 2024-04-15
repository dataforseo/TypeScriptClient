**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppendixWebhookResendRequestInfo

# Class: AppendixWebhookResendRequestInfo

## Implements

- [`IAppendixWebhookResendRequestInfo`](../interfaces/IAppendixWebhookResendRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppendixWebhookResendRequestInfo(data)

> **new AppendixWebhookResendRequestInfo**(`data`?): [`AppendixWebhookResendRequestInfo`](AppendixWebhookResendRequestInfo.md)

#### Parameters

• **data?**: [`IAppendixWebhookResendRequestInfo`](../interfaces/IAppendixWebhookResendRequestInfo.md)

#### Returns

[`AppendixWebhookResendRequestInfo`](AppendixWebhookResendRequestInfo.md)

#### Source

main.ts:218326

## Properties

### id?

> **`optional`** **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you can specify up to 100 identifiers;
each identifier in the task array must be specified as a separate object

#### Implementation of

[`IAppendixWebhookResendRequestInfo`](../interfaces/IAppendixWebhookResendRequestInfo.md).[`id`](../interfaces/IAppendixWebhookResendRequestInfo.md#id)

#### Source

main.ts:218322

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:218335

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:218352

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppendixWebhookResendRequestInfo`](AppendixWebhookResendRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppendixWebhookResendRequestInfo`](AppendixWebhookResendRequestInfo.md)

#### Source

main.ts:218345
