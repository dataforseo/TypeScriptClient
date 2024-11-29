[**Documentation**](../README.md)

***

[Documentation](../README.md) / MessageInfo

# Class: MessageInfo

## Implements

- [`IMessageInfo`](../interfaces/IMessageInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MessageInfo()

> **new MessageInfo**(`data`?): [`MessageInfo`](MessageInfo.md)

#### Parameters

##### data?

[`IMessageInfo`](../interfaces/IMessageInfo.md)

#### Returns

[`MessageInfo`](MessageInfo.md)

#### Defined in

main.ts:24822

## Properties

### level?

> `optional` **level**: `string`

level of error
can take the following values: fatal, error, warning, info

#### Implementation of

[`IMessageInfo`](../interfaces/IMessageInfo.md).[`level`](../interfaces/IMessageInfo.md#level)

#### Defined in

main.ts:24815

***

### message?

> `optional` **message**: `string`

message associated with an error
message providing the details of the detected error

#### Implementation of

[`IMessageInfo`](../interfaces/IMessageInfo.md).[`message`](../interfaces/IMessageInfo.md#message)

#### Defined in

main.ts:24818

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:24831

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:24849

***

### fromJS()

> `static` **fromJS**(`data`): [`MessageInfo`](MessageInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`MessageInfo`](MessageInfo.md)

#### Defined in

main.ts:24842
