**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageNonIndexableItem

# Class: OnPageNonIndexableItem

## Implements

- [`IOnPageNonIndexableItem`](../interfaces/IOnPageNonIndexableItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageNonIndexableItem(data)

> **new OnPageNonIndexableItem**(`data`?): [`OnPageNonIndexableItem`](OnPageNonIndexableItem.md)

#### Parameters

• **data?**: [`IOnPageNonIndexableItem`](../interfaces/IOnPageNonIndexableItem.md)

#### Returns

[`OnPageNonIndexableItem`](OnPageNonIndexableItem.md)

#### Source

main.ts:158080

## Properties

### reason?

> **`optional`** **reason**: `string`

the reason why the page is non-indexable
can take the following values: robots_txt, meta_tag, http_header, attribute, too_many_redirects

#### Implementation of

[`IOnPageNonIndexableItem`](../interfaces/IOnPageNonIndexableItem.md).[`reason`](../interfaces/IOnPageNonIndexableItem.md#reason)

#### Source

main.ts:158074

***

### url?

> **`optional`** **url**: `string`

url of the non-indexable page

#### Implementation of

[`IOnPageNonIndexableItem`](../interfaces/IOnPageNonIndexableItem.md).[`url`](../interfaces/IOnPageNonIndexableItem.md#url)

#### Source

main.ts:158076

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:158089

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:158107

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageNonIndexableItem`](OnPageNonIndexableItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageNonIndexableItem`](OnPageNonIndexableItem.md)

#### Source

main.ts:158100
