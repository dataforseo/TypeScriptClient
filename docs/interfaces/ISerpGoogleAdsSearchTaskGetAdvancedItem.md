[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleAdsSearchTaskGetAdvancedItem

# Interface: ISerpGoogleAdsSearchTaskGetAdvancedItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### advertiser\_id?

> `optional` **advertiser\_id**: `string`

unique identifier of the advertiser account

#### Defined in

main.ts:62500

***

### creative\_id?

> `optional` **creative\_id**: `string`

unique identifier of the advertisement

#### Defined in

main.ts:62502

***

### first\_shown?

> `optional` **first\_shown**: `string`

date and time when the ad was shown for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”

#### Defined in

main.ts:62519

***

### format?

> `optional` **format**: `string`

format of the advertisement
possible values: text, image, video

#### Defined in

main.ts:62512

***

### last\_shown?

> `optional` **last\_shown**: `string`

date and time when the ad was shown the last time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”

#### Defined in

main.ts:62522

***

### preview\_image?

> `optional` **preview\_image**: [`PreviewImage`](../classes/PreviewImage.md)

preview image of the advertisement

#### Defined in

main.ts:62514

***

### preview\_url?

> `optional` **preview\_url**: `string`

url pointing to the ad preview

#### Defined in

main.ts:62516

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:62498

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:62495

***

### title?

> `optional` **title**: `string`

title of the element

#### Defined in

main.ts:62504

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:62491

***

### url?

> `optional` **url**: `string`

search URL with refinement parameters

#### Defined in

main.ts:62506

***

### verified?

> `optional` **verified**: `boolean`

verified advertiser account
equals true if advertiser account is verified by Google Ads

#### Defined in

main.ts:62509
