[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageMicrodataItem

# Class: OnPageMicrodataItem

Defined in: main.ts:172046

## Implements

- [`IOnPageMicrodataItem`](../interfaces/IOnPageMicrodataItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageMicrodataItem()

> **new OnPageMicrodataItem**(`data`?): [`OnPageMicrodataItem`](OnPageMicrodataItem.md)

Defined in: main.ts:172054

#### Parameters

##### data?

[`IOnPageMicrodataItem`](../interfaces/IOnPageMicrodataItem.md)

#### Returns

[`OnPageMicrodataItem`](OnPageMicrodataItem.md)

## Properties

### inspection\_info?

> `optional` **inspection\_info**: [`MicrodataInspectionInfo`](MicrodataInspectionInfo.md)

Defined in: main.ts:172050

information related to microdata validation

#### Implementation of

[`IOnPageMicrodataItem`](../interfaces/IOnPageMicrodataItem.md).[`inspection_info`](../interfaces/IOnPageMicrodataItem.md#inspection_info)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:172048

type of element

#### Implementation of

[`IOnPageMicrodataItem`](../interfaces/IOnPageMicrodataItem.md).[`type`](../interfaces/IOnPageMicrodataItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:172063

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:172081

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageMicrodataItem`](OnPageMicrodataItem.md)

Defined in: main.ts:172074

#### Parameters

##### data

`any`

#### Returns

[`OnPageMicrodataItem`](OnPageMicrodataItem.md)
