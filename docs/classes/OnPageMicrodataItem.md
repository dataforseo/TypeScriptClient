[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / OnPageMicrodataItem

# Class: OnPageMicrodataItem

## Implements

- [`IOnPageMicrodataItem`](../interfaces/IOnPageMicrodataItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageMicrodataItem()

> **new OnPageMicrodataItem**(`data`?): [`OnPageMicrodataItem`](OnPageMicrodataItem.md)

#### Parameters

• **data?**: [`IOnPageMicrodataItem`](../interfaces/IOnPageMicrodataItem.md)

#### Returns

[`OnPageMicrodataItem`](OnPageMicrodataItem.md)

#### Defined in

main.ts:160179

## Properties

### inspection\_info?

> `optional` **inspection\_info**: [`MicrodataInspectionInfo`](MicrodataInspectionInfo.md)

information related to microdata validation

#### Implementation of

[`IOnPageMicrodataItem`](../interfaces/IOnPageMicrodataItem.md).[`inspection_info`](../interfaces/IOnPageMicrodataItem.md#inspection_info)

#### Defined in

main.ts:160175

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IOnPageMicrodataItem`](../interfaces/IOnPageMicrodataItem.md).[`type`](../interfaces/IOnPageMicrodataItem.md#type)

#### Defined in

main.ts:160173

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:160188

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:160206

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageMicrodataItem`](OnPageMicrodataItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageMicrodataItem`](OnPageMicrodataItem.md)

#### Defined in

main.ts:160199
