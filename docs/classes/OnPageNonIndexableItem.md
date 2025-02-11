[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageNonIndexableItem

# Class: OnPageNonIndexableItem

Defined in: main.ts:170600

## Implements

- [`IOnPageNonIndexableItem`](../interfaces/IOnPageNonIndexableItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageNonIndexableItem()

> **new OnPageNonIndexableItem**(`data`?): [`OnPageNonIndexableItem`](OnPageNonIndexableItem.md)

Defined in: main.ts:170609

#### Parameters

##### data?

[`IOnPageNonIndexableItem`](../interfaces/IOnPageNonIndexableItem.md)

#### Returns

[`OnPageNonIndexableItem`](OnPageNonIndexableItem.md)

## Properties

### reason?

> `optional` **reason**: `string`

Defined in: main.ts:170603

the reason why the page is non-indexable
can take the following values: robots_txt, meta_tag, http_header, attribute, too_many_redirects

#### Implementation of

[`IOnPageNonIndexableItem`](../interfaces/IOnPageNonIndexableItem.md).[`reason`](../interfaces/IOnPageNonIndexableItem.md#reason)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:170605

url of the non-indexable page

#### Implementation of

[`IOnPageNonIndexableItem`](../interfaces/IOnPageNonIndexableItem.md).[`url`](../interfaces/IOnPageNonIndexableItem.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:170618

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:170636

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageNonIndexableItem`](OnPageNonIndexableItem.md)

Defined in: main.ts:170629

#### Parameters

##### data

`any`

#### Returns

[`OnPageNonIndexableItem`](OnPageNonIndexableItem.md)
