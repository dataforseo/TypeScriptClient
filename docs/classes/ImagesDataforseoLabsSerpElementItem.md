[**Documentation**](../README.md)

***

[Documentation](../README.md) / ImagesDataforseoLabsSerpElementItem

# Class: ImagesDataforseoLabsSerpElementItem

Defined in: main.ts:106564

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ImagesDataforseoLabsSerpElementItem()

> **new ImagesDataforseoLabsSerpElementItem**(`data`?): [`ImagesDataforseoLabsSerpElementItem`](ImagesDataforseoLabsSerpElementItem.md)

Defined in: main.ts:106579

#### Parameters

##### data?

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md)

#### Returns

[`ImagesDataforseoLabsSerpElementItem`](ImagesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21425

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`ImagesElement`](ImagesElement.md)[]

Defined in: main.ts:106572

elements of search results found in SERP

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21421

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21417

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21414

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### related\_image\_searches?

> `optional` **related\_image\_searches**: [`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)

Defined in: main.ts:106575

contains keywords and images related to the specified search term
if there are none, equals null

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`related_image_searches`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#related_image_searches)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:106566

search engine type

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`se_type`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#se_type)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:106568

title of the result in SERP

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21411

type of element

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:106570

relevant URL of the Ad element in SERP

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21423

the XPath of the element

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:106584

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:106610

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`ImagesDataforseoLabsSerpElementItem`](ImagesDataforseoLabsSerpElementItem.md)

Defined in: main.ts:106603

#### Parameters

##### data

`any`

#### Returns

[`ImagesDataforseoLabsSerpElementItem`](ImagesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
