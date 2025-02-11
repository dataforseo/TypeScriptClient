[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppendixWebhookResendRequestInfo

# Class: AppendixWebhookResendRequestInfo

Defined in: main.ts:239690

## Implements

- [`IAppendixWebhookResendRequestInfo`](../interfaces/IAppendixWebhookResendRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppendixWebhookResendRequestInfo()

> **new AppendixWebhookResendRequestInfo**(`data`?): [`AppendixWebhookResendRequestInfo`](AppendixWebhookResendRequestInfo.md)

Defined in: main.ts:239699

#### Parameters

##### data?

[`IAppendixWebhookResendRequestInfo`](../interfaces/IAppendixWebhookResendRequestInfo.md)

#### Returns

[`AppendixWebhookResendRequestInfo`](AppendixWebhookResendRequestInfo.md)

## Properties

### id?

> `optional` **id**: `string`

Defined in: main.ts:239695

task identifier
unique task identifier in our system in the UUID format
you can specify up to 100 identifiers;
each identifier in the task array must be specified as a separate object

#### Implementation of

[`IAppendixWebhookResendRequestInfo`](../interfaces/IAppendixWebhookResendRequestInfo.md).[`id`](../interfaces/IAppendixWebhookResendRequestInfo.md#id)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:239708

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:239725

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppendixWebhookResendRequestInfo`](AppendixWebhookResendRequestInfo.md)

Defined in: main.ts:239718

#### Parameters

##### data

`any`

#### Returns

[`AppendixWebhookResendRequestInfo`](AppendixWebhookResendRequestInfo.md)
