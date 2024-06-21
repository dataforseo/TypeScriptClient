**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleSearchIntentLiveItem

# Class: DataforseoLabsGoogleSearchIntentLiveItem

## Implements

- [`IDataforseoLabsGoogleSearchIntentLiveItem`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleSearchIntentLiveItem(data)

> **new DataforseoLabsGoogleSearchIntentLiveItem**(`data`?): [`DataforseoLabsGoogleSearchIntentLiveItem`](DataforseoLabsGoogleSearchIntentLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleSearchIntentLiveItem`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md)

#### Returns

[`DataforseoLabsGoogleSearchIntentLiveItem`](DataforseoLabsGoogleSearchIntentLiveItem.md)

#### Source

main.ts:86944

## Properties

### keyword?

> **`optional`** **keyword**: `string`

target keyword in a POST array

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveItem`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md).[`keyword`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md#keyword)

#### Source

main.ts:86936

***

### keyword\_intent?

> **`optional`** **keyword\_intent**: [`KeywordIntentInfo`](KeywordIntentInfo.md)

search intent data relevant for the specified keyword

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveItem`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md).[`keyword_intent`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md#keyword_intent)

#### Source

main.ts:86938

***

### secondary\_keyword\_intents?

> **`optional`** **secondary\_keyword\_intents**: [`KeywordIntentInfo`](KeywordIntentInfo.md)[]

contains objects with other possible search intents for the specified keyword

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveItem`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md).[`secondary_keyword_intents`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md#secondary_keyword_intents)

#### Source

main.ts:86940

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:86953

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:86976

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleSearchIntentLiveItem`](DataforseoLabsGoogleSearchIntentLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleSearchIntentLiveItem`](DataforseoLabsGoogleSearchIntentLiveItem.md)

#### Source

main.ts:86969
