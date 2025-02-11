[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsSearchTaskGetAdvancedItem

# Class: SerpGoogleAdsSearchTaskGetAdvancedItem

Defined in: main.ts:62419

## Implements

- [`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAdsSearchTaskGetAdvancedItem()

> **new SerpGoogleAdsSearchTaskGetAdvancedItem**(`data`?): [`SerpGoogleAdsSearchTaskGetAdvancedItem`](SerpGoogleAdsSearchTaskGetAdvancedItem.md)

Defined in: main.ts:62456

#### Parameters

##### data?

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md)

#### Returns

[`SerpGoogleAdsSearchTaskGetAdvancedItem`](SerpGoogleAdsSearchTaskGetAdvancedItem.md)

## Properties

### advertiser\_id?

> `optional` **advertiser\_id**: `string`

Defined in: main.ts:62430

unique identifier of the advertiser account

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`advertiser_id`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#advertiser_id)

***

### creative\_id?

> `optional` **creative\_id**: `string`

Defined in: main.ts:62432

unique identifier of the advertisement

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`creative_id`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#creative_id)

***

### first\_shown?

> `optional` **first\_shown**: `string`

Defined in: main.ts:62449

date and time when the ad was shown for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`first_shown`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#first_shown)

***

### format?

> `optional` **format**: `string`

Defined in: main.ts:62442

format of the advertisement
possible values: text, image, video

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`format`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#format)

***

### last\_shown?

> `optional` **last\_shown**: `string`

Defined in: main.ts:62452

date and time when the ad was shown the last time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`last_shown`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#last_shown)

***

### preview\_image?

> `optional` **preview\_image**: [`PreviewImage`](PreviewImage.md)

Defined in: main.ts:62444

preview image of the advertisement

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`preview_image`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#preview_image)

***

### preview\_url?

> `optional` **preview\_url**: `string`

Defined in: main.ts:62446

url pointing to the ad preview

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`preview_url`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#preview_url)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:62428

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`rank_absolute`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:62425

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`rank_group`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#rank_group)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:62434

title of the element

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`title`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:62421

type of element

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`type`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:62436

search URL with refinement parameters

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`url`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#url)

***

### verified?

> `optional` **verified**: `boolean`

Defined in: main.ts:62439

verified advertiser account
equals true if advertiser account is verified by Google Ads

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`verified`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#verified)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:62465

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:62494

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAdsSearchTaskGetAdvancedItem`](SerpGoogleAdsSearchTaskGetAdvancedItem.md)

Defined in: main.ts:62487

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAdsSearchTaskGetAdvancedItem`](SerpGoogleAdsSearchTaskGetAdvancedItem.md)
