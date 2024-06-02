**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ImagesDataforseoLabsSerpElementItem

# Class: ImagesDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ImagesDataforseoLabsSerpElementItem(data)

> **new ImagesDataforseoLabsSerpElementItem**(`data`?): [`ImagesDataforseoLabsSerpElementItem`](ImagesDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md)

#### Returns

[`ImagesDataforseoLabsSerpElementItem`](ImagesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:97991

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20051

***

### items?

> **`optional`** **items**: [`ImagesElement`](ImagesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#items)

#### Source

main.ts:97984

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:97975

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:97971

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:97968

***

### related\_image\_searches?

> **`optional`** **related\_image\_searches**: [`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)[]

contains keywords and images related to the specified search term
if there are none, equals null

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`related_image_searches`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#related_image_searches)

#### Source

main.ts:97987

***

### title?

> **`optional`** **title**: `string`

title of the item

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#title)

#### Source

main.ts:97979

***

### url?

> **`optional`** **url**: `string`

URL link

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#url)

#### Source

main.ts:97981

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IImagesDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:97977

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Source

main.ts:97996

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Source

main.ts:98029

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ImagesDataforseoLabsSerpElementItem`](ImagesDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ImagesDataforseoLabsSerpElementItem`](ImagesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:98022
