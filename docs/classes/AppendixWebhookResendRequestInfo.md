[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppendixWebhookResendRequestInfo

# Class: AppendixWebhookResendRequestInfo

## Implements

- [`IAppendixWebhookResendRequestInfo`](../interfaces/IAppendixWebhookResendRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppendixWebhookResendRequestInfo()

> **new AppendixWebhookResendRequestInfo**(`data`?): [`AppendixWebhookResendRequestInfo`](AppendixWebhookResendRequestInfo.md)

#### Parameters

##### data?

[`IAppendixWebhookResendRequestInfo`](../interfaces/IAppendixWebhookResendRequestInfo.md)

#### Returns

[`AppendixWebhookResendRequestInfo`](AppendixWebhookResendRequestInfo.md)

#### Defined in

main.ts:239203

## Properties

### id?

> `optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you can specify up to 100 identifiers;
each identifier in the task array must be specified as a separate object

#### Implementation of

[`IAppendixWebhookResendRequestInfo`](../interfaces/IAppendixWebhookResendRequestInfo.md).[`id`](../interfaces/IAppendixWebhookResendRequestInfo.md#id)

#### Defined in

main.ts:239199

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:239212

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:239229

***

### fromJS()

> `static` **fromJS**(`data`): [`AppendixWebhookResendRequestInfo`](AppendixWebhookResendRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`AppendixWebhookResendRequestInfo`](AppendixWebhookResendRequestInfo.md)

#### Defined in

main.ts:239222
