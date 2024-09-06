[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / OnPageNonIndexableItem

# Class: OnPageNonIndexableItem

## Implements

- [`IOnPageNonIndexableItem`](../interfaces/IOnPageNonIndexableItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageNonIndexableItem()

> **new OnPageNonIndexableItem**(`data`?): [`OnPageNonIndexableItem`](OnPageNonIndexableItem.md)

#### Parameters

• **data?**: [`IOnPageNonIndexableItem`](../interfaces/IOnPageNonIndexableItem.md)

#### Returns

[`OnPageNonIndexableItem`](OnPageNonIndexableItem.md)

#### Defined in

main.ts:158742

## Properties

### reason?

> `optional` **reason**: `string`

the reason why the page is non-indexable
can take the following values: robots_txt, meta_tag, http_header, attribute, too_many_redirects

#### Implementation of

[`IOnPageNonIndexableItem`](../interfaces/IOnPageNonIndexableItem.md).[`reason`](../interfaces/IOnPageNonIndexableItem.md#reason)

#### Defined in

main.ts:158736

***

### url?

> `optional` **url**: `string`

url of the non-indexable page

#### Implementation of

[`IOnPageNonIndexableItem`](../interfaces/IOnPageNonIndexableItem.md).[`url`](../interfaces/IOnPageNonIndexableItem.md#url)

#### Defined in

main.ts:158738

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:158751

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:158769

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageNonIndexableItem`](OnPageNonIndexableItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageNonIndexableItem`](OnPageNonIndexableItem.md)

#### Defined in

main.ts:158762
