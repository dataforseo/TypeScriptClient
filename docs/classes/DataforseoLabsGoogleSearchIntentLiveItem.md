[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleSearchIntentLiveItem

# Class: DataforseoLabsGoogleSearchIntentLiveItem

## Implements

- [`IDataforseoLabsGoogleSearchIntentLiveItem`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleSearchIntentLiveItem()

> **new DataforseoLabsGoogleSearchIntentLiveItem**(`data`?): [`DataforseoLabsGoogleSearchIntentLiveItem`](DataforseoLabsGoogleSearchIntentLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleSearchIntentLiveItem`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md)

#### Returns

[`DataforseoLabsGoogleSearchIntentLiveItem`](DataforseoLabsGoogleSearchIntentLiveItem.md)

#### Defined in

main.ts:88147

## Properties

### keyword?

> `optional` **keyword**: `string`

target keyword in a POST array

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveItem`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md).[`keyword`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md#keyword)

#### Defined in

main.ts:88139

***

### keyword\_intent?

> `optional` **keyword\_intent**: [`KeywordIntentInfo`](KeywordIntentInfo.md)

search intent data relevant for the specified keyword

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveItem`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md).[`keyword_intent`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md#keyword_intent)

#### Defined in

main.ts:88141

***

### secondary\_keyword\_intents?

> `optional` **secondary\_keyword\_intents**: [`KeywordIntentInfo`](KeywordIntentInfo.md)[]

contains objects with other possible search intents for the specified keyword

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveItem`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md).[`secondary_keyword_intents`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md#secondary_keyword_intents)

#### Defined in

main.ts:88143

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:88156

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:88179

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleSearchIntentLiveItem`](DataforseoLabsGoogleSearchIntentLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleSearchIntentLiveItem`](DataforseoLabsGoogleSearchIntentLiveItem.md)

#### Defined in

main.ts:88172
