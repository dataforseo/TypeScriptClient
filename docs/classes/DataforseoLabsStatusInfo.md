**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsStatusInfo

# Class: DataforseoLabsStatusInfo

## Implements

- [`IDataforseoLabsStatusInfo`](../interfaces/IDataforseoLabsStatusInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsStatusInfo(data)

> **new DataforseoLabsStatusInfo**(`data`?): [`DataforseoLabsStatusInfo`](DataforseoLabsStatusInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsStatusInfo`](../interfaces/IDataforseoLabsStatusInfo.md)

#### Returns

[`DataforseoLabsStatusInfo`](DataforseoLabsStatusInfo.md)

#### Source

main.ts:79176

## Properties

### date\_update?

> **`optional`** **date\_update**: `string`

update date of the Google endpoints
indicates the last date when the Google endpoints of DataForSEO Labs API were updated;
example:
2022-05-16

#### Implementation of

[`IDataforseoLabsStatusInfo`](../interfaces/IDataforseoLabsStatusInfo.md).[`date_update`](../interfaces/IDataforseoLabsStatusInfo.md#date_update)

#### Source

main.ts:79172

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:79185

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:79202

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsStatusInfo`](DataforseoLabsStatusInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsStatusInfo`](DataforseoLabsStatusInfo.md)

#### Source

main.ts:79195
