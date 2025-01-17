[**Documentation**](../README.md)

***

[Documentation](../README.md) / MessageInfo

# Class: MessageInfo

Defined in: main.ts:24812

## Implements

- [`IMessageInfo`](../interfaces/IMessageInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MessageInfo()

> **new MessageInfo**(`data`?): [`MessageInfo`](MessageInfo.md)

Defined in: main.ts:24822

#### Parameters

##### data?

[`IMessageInfo`](../interfaces/IMessageInfo.md)

#### Returns

[`MessageInfo`](MessageInfo.md)

## Properties

### level?

> `optional` **level**: `string`

Defined in: main.ts:24815

level of error
can take the following values: fatal, error, warning, info

#### Implementation of

[`IMessageInfo`](../interfaces/IMessageInfo.md).[`level`](../interfaces/IMessageInfo.md#level)

***

### message?

> `optional` **message**: `string`

Defined in: main.ts:24818

message associated with an error
message providing the details of the detected error

#### Implementation of

[`IMessageInfo`](../interfaces/IMessageInfo.md).[`message`](../interfaces/IMessageInfo.md#message)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:24831

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:24849

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MessageInfo`](MessageInfo.md)

Defined in: main.ts:24842

#### Parameters

##### data

`any`

#### Returns

[`MessageInfo`](MessageInfo.md)
