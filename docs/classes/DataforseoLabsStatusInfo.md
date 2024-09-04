[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsStatusInfo

# Class: DataforseoLabsStatusInfo

## Implements

- [`IDataforseoLabsStatusInfo`](../interfaces/IDataforseoLabsStatusInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsStatusInfo()

> **new DataforseoLabsStatusInfo**(`data`?): [`DataforseoLabsStatusInfo`](DataforseoLabsStatusInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsStatusInfo`](../interfaces/IDataforseoLabsStatusInfo.md)

#### Returns

[`DataforseoLabsStatusInfo`](DataforseoLabsStatusInfo.md)

#### Defined in

main.ts:81862

## Properties

### date\_update?

> `optional` **date\_update**: `string`

update date of the Google endpoints
indicates the last date when the Google endpoints of DataForSEO Labs API were updated;
example:
2022-05-16

#### Implementation of

[`IDataforseoLabsStatusInfo`](../interfaces/IDataforseoLabsStatusInfo.md).[`date_update`](../interfaces/IDataforseoLabsStatusInfo.md#date_update)

#### Defined in

main.ts:81858

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:81871

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:81888

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsStatusInfo`](DataforseoLabsStatusInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsStatusInfo`](DataforseoLabsStatusInfo.md)

#### Defined in

main.ts:81881
