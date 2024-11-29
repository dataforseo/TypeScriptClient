[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsSearchTaskGetAdvancedItem

# Class: SerpGoogleAdsSearchTaskGetAdvancedItem

## Implements

- [`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAdsSearchTaskGetAdvancedItem()

> **new SerpGoogleAdsSearchTaskGetAdvancedItem**(`data`?): [`SerpGoogleAdsSearchTaskGetAdvancedItem`](SerpGoogleAdsSearchTaskGetAdvancedItem.md)

#### Parameters

##### data?

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md)

#### Returns

[`SerpGoogleAdsSearchTaskGetAdvancedItem`](SerpGoogleAdsSearchTaskGetAdvancedItem.md)

#### Defined in

main.ts:62428

## Properties

### advertiser\_id?

> `optional` **advertiser\_id**: `string`

unique identifier of the advertiser account

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`advertiser_id`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#advertiser_id)

#### Defined in

main.ts:62402

***

### creative\_id?

> `optional` **creative\_id**: `string`

unique identifier of the advertisement

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`creative_id`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#creative_id)

#### Defined in

main.ts:62404

***

### first\_shown?

> `optional` **first\_shown**: `string`

date and time when the ad was shown for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`first_shown`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#first_shown)

#### Defined in

main.ts:62421

***

### format?

> `optional` **format**: `string`

format of the advertisement
possible values: text, image, video

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`format`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#format)

#### Defined in

main.ts:62414

***

### last\_shown?

> `optional` **last\_shown**: `string`

date and time when the ad was shown the last time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`last_shown`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#last_shown)

#### Defined in

main.ts:62424

***

### preview\_image?

> `optional` **preview\_image**: [`PreviewImage`](PreviewImage.md)

preview image of the advertisement

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`preview_image`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#preview_image)

#### Defined in

main.ts:62416

***

### preview\_url?

> `optional` **preview\_url**: `string`

url pointing to the ad preview

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`preview_url`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#preview_url)

#### Defined in

main.ts:62418

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`rank_absolute`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#rank_absolute)

#### Defined in

main.ts:62400

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`rank_group`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#rank_group)

#### Defined in

main.ts:62397

***

### title?

> `optional` **title**: `string`

title of the element

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`title`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#title)

#### Defined in

main.ts:62406

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`type`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#type)

#### Defined in

main.ts:62393

***

### url?

> `optional` **url**: `string`

search URL with refinement parameters

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`url`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#url)

#### Defined in

main.ts:62408

***

### verified?

> `optional` **verified**: `boolean`

verified advertiser account
equals true if advertiser account is verified by Google Ads

#### Implementation of

[`ISerpGoogleAdsSearchTaskGetAdvancedItem`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md).[`verified`](../interfaces/ISerpGoogleAdsSearchTaskGetAdvancedItem.md#verified)

#### Defined in

main.ts:62411

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:62437

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:62466

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAdsSearchTaskGetAdvancedItem`](SerpGoogleAdsSearchTaskGetAdvancedItem.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAdsSearchTaskGetAdvancedItem`](SerpGoogleAdsSearchTaskGetAdvancedItem.md)

#### Defined in

main.ts:62459
