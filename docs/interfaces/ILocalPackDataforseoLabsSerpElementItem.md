[Documentation](../README.md) / [Exports](../modules.md) / ILocalPackDataforseoLabsSerpElementItem

# Interface: ILocalPackDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`ILocalPackDataforseoLabsSerpElementItem`**

## Implemented by

- [`LocalPackDataforseoLabsSerpElementItem`](../classes/LocalPackDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [backlinks\_info](ILocalPackDataforseoLabsSerpElementItem.md#backlinks_info)
- [description](ILocalPackDataforseoLabsSerpElementItem.md#description)
- [domain](ILocalPackDataforseoLabsSerpElementItem.md#domain)
- [estimated\_paid\_traffic\_cost](ILocalPackDataforseoLabsSerpElementItem.md#estimated_paid_traffic_cost)
- [etv](ILocalPackDataforseoLabsSerpElementItem.md#etv)
- [impressions\_etv](ILocalPackDataforseoLabsSerpElementItem.md#impressions_etv)
- [is\_paid](ILocalPackDataforseoLabsSerpElementItem.md#is_paid)
- [main\_domain](ILocalPackDataforseoLabsSerpElementItem.md#main_domain)
- [phone](ILocalPackDataforseoLabsSerpElementItem.md#phone)
- [position](ILocalPackDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](ILocalPackDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_changes](ILocalPackDataforseoLabsSerpElementItem.md#rank_changes)
- [rank\_group](ILocalPackDataforseoLabsSerpElementItem.md#rank_group)
- [rank\_info](ILocalPackDataforseoLabsSerpElementItem.md#rank_info)
- [rating](ILocalPackDataforseoLabsSerpElementItem.md#rating)
- [relative\_url](ILocalPackDataforseoLabsSerpElementItem.md#relative_url)
- [se\_type](ILocalPackDataforseoLabsSerpElementItem.md#se_type)
- [title](ILocalPackDataforseoLabsSerpElementItem.md#title)
- [url](ILocalPackDataforseoLabsSerpElementItem.md#url)
- [xpath](ILocalPackDataforseoLabsSerpElementItem.md#xpath)

## Properties

### backlinks\_info

• `Optional` **backlinks\_info**: [`BacklinksInfo`](../classes/BacklinksInfo.md)

backlinks information for the target website

#### Defined in

main.ts:95829

___

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Defined in

main.ts:95791

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Defined in

main.ts:95793

___

### estimated\_paid\_traffic\_cost

• `Optional` **estimated\_paid\_traffic\_cost**: `number`

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost of running ads for the returned keyword
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:95821

___

### etv

• `Optional` **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:95811

___

### impressions\_etv

• `Optional` **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of the returned keyword
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:95816

___

### is\_paid

• `Optional` **is\_paid**: `boolean`

indicates whether the element is an ad

#### Defined in

main.ts:95799

___

### main\_domain

• `Optional` **main\_domain**: `string`

primary domain name in SERP

#### Defined in

main.ts:95804

___

### phone

• `Optional` **phone**: `string`

phone number

#### Defined in

main.ts:95795

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:95785

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:95781

___

### rank\_changes

• `Optional` **rank\_changes**: [`RankChanges`](../classes/RankChanges.md)

changes in rankings
ranking changes of the SERP element compared to the preceding month;
Note: the changes are calculated even if the preceding month is not included in a POST request

#### Defined in

main.ts:95825

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:95778

___

### rank\_info

• `Optional` **rank\_info**: [`RankInfo`](../classes/RankInfo.md)

page and domain rank information

#### Defined in

main.ts:95831

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:95802

___

### relative\_url

• `Optional` **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Defined in

main.ts:95806

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:95827

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:95789

___

### url

• `Optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Defined in

main.ts:95797

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:95787
