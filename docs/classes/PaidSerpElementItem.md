**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / PaidSerpElementItem

# Class: PaidSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PaidSerpElementItem(data)

> **new PaidSerpElementItem**(`data`?): [`PaidSerpElementItem`](PaidSerpElementItem.md)

#### Parameters

• **data?**: [`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md)

#### Returns

[`PaidSerpElementItem`](PaidSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:25848

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19830

***

### breadcrumb?

> **`optional`** **breadcrumb**: `string`

breadcrumb in SERP

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`breadcrumb`](../interfaces/IPaidSerpElementItem.md#breadcrumb)

#### Source

main.ts:25814

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`description`](../interfaces/IPaidSerpElementItem.md#description)

#### Source

main.ts:25828

***

### description\_rows?

> **`optional`** **description\_rows**: `string`[]

extended description
if there is none, equals null

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`description_rows`](../interfaces/IPaidSerpElementItem.md#description_rows)

#### Source

main.ts:25831

***

### domain?

> **`optional`** **domain**: `string`

website domain

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`domain`](../interfaces/IPaidSerpElementItem.md#domain)

#### Source

main.ts:25812

***

### extra?

> **`optional`** **extra**: `Object`

additional information about the result

#### Index signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`extra`](../interfaces/IPaidSerpElementItem.md#extra)

#### Source

main.ts:25826

***

### highlighted?

> **`optional`** **highlighted**: `string`[]

words highlighted in bold within the results description

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`highlighted`](../interfaces/IPaidSerpElementItem.md#highlighted)

#### Source

main.ts:25824

***

### images?

> **`optional`** **images**: [`ImagesElement`](ImagesElement.md)[]

images of the element

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`images`](../interfaces/IPaidSerpElementItem.md#images)

#### Source

main.ts:25820

***

### is\_image?

> **`optional`** **is\_image**: `boolean`

indicates whether the element contains an image

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`is_image`](../interfaces/IPaidSerpElementItem.md#is_image)

#### Source

main.ts:25816

***

### is\_video?

> **`optional`** **is\_video**: `boolean`

indicates whether the element contains a video

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`is_video`](../interfaces/IPaidSerpElementItem.md#is_video)

#### Source

main.ts:25818

***

### links?

> **`optional`** **links**: [`AdLinkElement`](AdLinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`links`](../interfaces/IPaidSerpElementItem.md#links)

#### Source

main.ts:25835

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`position`](../interfaces/IPaidSerpElementItem.md#position)

#### Source

main.ts:25806

***

### price?

> **`optional`** **price**: [`PriceInfo`](PriceInfo.md)

pricing details
contains the pricing details of the product or service featured in the result

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`price`](../interfaces/IPaidSerpElementItem.md#price)

#### Source

main.ts:25838

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`rank_absolute`](../interfaces/IPaidSerpElementItem.md#rank_absolute)

#### Source

main.ts:25802

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`rank_group`](../interfaces/IPaidSerpElementItem.md#rank_group)

#### Source

main.ts:25799

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`rectangle`](../interfaces/IPaidSerpElementItem.md#rectangle)

#### Source

main.ts:25842

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`title`](../interfaces/IPaidSerpElementItem.md#title)

#### Source

main.ts:25810

***

### url?

> **`optional`** **url**: `string`

relevant URL in SERP

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`url`](../interfaces/IPaidSerpElementItem.md#url)

#### Source

main.ts:25822

***

### website\_name?

> **`optional`** **website\_name**: `string`

website name in SERP

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`website_name`](../interfaces/IPaidSerpElementItem.md#website_name)

#### Source

main.ts:25844

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`xpath`](../interfaces/IPaidSerpElementItem.md#xpath)

#### Source

main.ts:25808

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Source

main.ts:25853

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Source

main.ts:25911

***

### fromJS()

> **`static`** **fromJS**(`data`): [`PaidSerpElementItem`](PaidSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`PaidSerpElementItem`](PaidSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:25904
