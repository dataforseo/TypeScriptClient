**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageMicrodataItem

# Class: OnPageMicrodataItem

## Implements

- [`IOnPageMicrodataItem`](../interfaces/IOnPageMicrodataItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageMicrodataItem(data)

> **new OnPageMicrodataItem**(`data`?): [`OnPageMicrodataItem`](OnPageMicrodataItem.md)

#### Parameters

• **data?**: [`IOnPageMicrodataItem`](../interfaces/IOnPageMicrodataItem.md)

#### Returns

[`OnPageMicrodataItem`](OnPageMicrodataItem.md)

#### Source

main.ts:158274

## Properties

### inspection\_info?

> **`optional`** **inspection\_info**: [`MicrodataInspectionInfo`](MicrodataInspectionInfo.md)

information related to microdata validation

#### Implementation of

[`IOnPageMicrodataItem`](../interfaces/IOnPageMicrodataItem.md).[`inspection_info`](../interfaces/IOnPageMicrodataItem.md#inspection_info)

#### Source

main.ts:158270

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IOnPageMicrodataItem`](../interfaces/IOnPageMicrodataItem.md).[`type`](../interfaces/IOnPageMicrodataItem.md#type)

#### Source

main.ts:158268

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:158283

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:158301

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageMicrodataItem`](OnPageMicrodataItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageMicrodataItem`](OnPageMicrodataItem.md)

#### Source

main.ts:158294
