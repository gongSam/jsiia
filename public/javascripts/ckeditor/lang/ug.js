id=TRUE

[RT_ANY_GenTelMarkersAreInvalid]
M:GenTelMarkersAge>=45
M:GenTelMarkersAreTampered=TRUE

[RT_ALL_DataRoundNotNew]
M:CurrentTelemetryRoundNumber=*
M:PreviousFullSyncRoundNumber>=M:CurrentTelemetryRoundNumber

[RT_ALL_ExceededMaxOfflineCount]
M:CurrentOfflineCount>=3
T:RT_ANY_ClearOfflineIssueCounterBeforeRun!=TRUE

[RT_ALL_ExceededMaxFailureCount]
M:EnterpriseForceSync!=TRUE
M:CurrentFailureCount>=3
T:RT_ANY_ClearFailureIssueCounterBeforeRun!=TRUE

[RT_ALL_FirstFullSyncOfNewRound]
T:RT_ALL_RoundBeingAttemptedIsNotNew!=TRUE
T:RT_ALL_ShouldSendFullSyncUtc=TRUE

[RT_ALL_RoundBeingAttemptedIsNotNew]
M:CurrentTelemetryRoundNumber=*
M:PreviousAttemptedFullSyncRoundNumber>=M:CurrentTelemetryRoundNumber

[RT_ALL_FirstRunOfNewDataFile]
T:RT_ALL_DataFileBeingAttemptedIsNotNew!=TRUE

[RT_ALL_DataFileBeingAttemptedIsNotNew]
M:CurrentDataVersion=*
M:PreviousAttemptedRunDataVersion>=M:CurrentDataVersion

[RT_ANY_ClearFailureIssueCounterBeforeRun]
T:RT_ALL_FirstFullSyncOfNewRound=TRUE
T:RT_ALL_FirstRunOfNewDataFile=TRUE

[RT_ANY_ClearOfflineIssueCounterBeforeRun]
T:RT_ALL_FirstFullSyncOfNewRound=TRUE

[RT_ALL_InventoryFullSyncAlreadySentByAppraiserForRound]
T:RT_ALL_RoundBeingAttemptedIsNotNew=TRUE

[DT_ANY_MEM_MemoryRequirementViolatedForArchitecture]
T:DT_ALL_REF_MemoryRequirementViolated64=TRUE
T:DT_ALL_REF_MemoryRequirementViolatedNon64=TRUE

[DT_ALL_REF_MemoryRequirementViolated64]
M:Architecture=9
T:DT_ANY_REF_MemoryRequirmentViolatedEither64=TRUE

[DT_ANY_REF_MemoryRequirmentViolatedEither64]
T:DT_ALL_REF_MemoryRequirementViolatedClient64=TRUE
T:DT_ALL_REF_MemoryRequirementViolatedServer64=TRUE

[DT_ALL_REF_MemoryRequirementViolatedClient64]
M:ProductType!=Server
I:ramKB<=1887436

[DT_ALL_REF_MemoryRequirementViolatedServer64]
M:ProductType=Server
I:ramKB<=471859

[DT_ALL_REF_MemoryRequirementViolatedNon64]
M:Architecture!=9
I:ramKB<=943718

[DT_ANY_PRF_ProcessorRequirementIssues]
I:SSE2ProcessorSupport=FALSE
I:NXProcessorSupport=FALSE
I:CompareExchange128Support=FALSE
I:LahfSahfSupport=FALSE
I:PrefetchWSupport=FALSE

[DT_ORD_BIO_HasBiosBlockForMode]
D:SdbUpgradeMode=M:UpgradeMode
D:SdbBlockType=BlockUpgrade

[DT_ANY_SYS_BlockingSystemUnversioned]
T:DT_ANY_MEM_MemoryRequirementViolatedForArchitecture=TRUE
T:DT_ANY_PRF_ProcessorRequirementIssues=TRUE
T:DT_ALL_WLN_HasWlanBlock=TRUE

[DT_ANY_SYS_BlockingSystem]
T:DT_ANY_SYS_BlockingSystemUnversioned=TRUE
T:DT_ORD_BIO_HasBiosBlockForMode=TRUE

[DT_ALL_WLN_HasWlanBlock]
I:WlanModulePresent=TRUE
I:WlanExists=TRUE
I:WlanEmulatedDriver=TRUE

[DT_ALL_WIM_IsWimBoot]
I:RegistryWimBootValue!=0

[DT_ALL_WAS_WindowsNotActivated]
I:WindowsIsLicensed=FALSE

[DT_ALL_LGP_HasLanguagePack]
I:LanguagePackCount>=2

[DT_ALL_GEU_IsGuestAccountEnabled]
I:IsGuestAccountEnabled=TRUE

[DT_ANY_FIL_BlockUpgradeUxTables]
T:DT_ORD_FIL_ReinstallAfterUpgradeWarnUxStatus=TRUE
T:DT_ORD_FIL_BlockUpgradeUxStatus=TRUE
T:DT_ORD_FIL_BlockUpgradeCanReinstallUxStatus=TRUE
T:DT_ORD_FIL_BlockUpgradeUntilUpdateUxStatus=TRUE

[DT_ORD_FIL_BlockUpgradeStatus]
D:SdbBlockType=BlockUpgrade
D:SdbUpgradeMode=M:UpgradeMode

[DT_ORD_FIL_BlockUpgradeCanReinstallStatus]
D:SdbBlockType=BlockUpgradeCanReinstall
D:SdbUpgradeMode=M:UpgradeMode

[DT_ORD_FIL_BlockUpgradeCanReinstallUxStatus]
D:SdbBlockOverrideType=SDB_UX_BLOCKTYPE_OVERRIDE_UPGRADE_CAN_REINSTALL_BLOCK
D:SdbUpgradeMode=M:UpgradeMode

[DT_ORD_FIL_BlockUpgradeUntilUpdateStatus]
D:SdbBlockType=BlockUpgradeUntilUpdate
D:SdbUpgradeMode=M:UpgradeMode

[DT_ORD_FIL_BlockUpgradeUntilUpdateUxStatus]
D:SdbBlockOverrideType=SDB_UX_BLOCKTYPE_OVERRIDE_UPGRADE_UNTIL_UPDATE_BLOCK
D:SdbUpgradeMode=M:UpgradeMode

[DT_ORD_FIL_HasMigTypeForMode]
D:SdbUpgradeMode=M:UpgradeMode
D:MigXmlType=*

[DT_ORD_REF_HasNotifyMig]
D:MigXmlType=LT_NotifyMigTypes
D:SdbUpgradeMode=M:UpgradeMode

[DT_ORD_FIL_MigXmlRemovedStatus]
D:MigXmlType=MIG_XML_TYPE_REMOVED
D:SdbUpgradeMode=M:UpgradeMode

[DT_ORD_FIL_ReinstallAfterUpgradeStatus]
D:SdbBlockType=ReinstallAfterUp"dlgTitle":"CKEditor ھەققىدە","help":"$1 نى زىيارەت قىلىپ ياردەمگە ئېرىشىڭ","moreInfo":"تور تۇرايىمىزنى زىيارەت قىلىپ كېلىشىمگە ئائىت تېخىمۇ كۆپ ئۇچۇرغا ئېرىشىڭ","title":"CKEditor ھەققىدە","userGuide":"CKEditor ئىشلەتكۈچى قوللانمىسى"},"basicstyles":{"bold":"توم","italic":"يانتۇ","strike":"ئۆچۈرۈش سىزىقى","subscript":"تۆۋەن ئىندېكس","superscript":"يۇقىرى ئىندېكس","underline":"ئاستى سىزىق"},"blockquote":{"toolbar":"بۆلەك نەقىل"},"clipboard":{"copy":"كۆچۈر","copyError":"تور كۆرگۈڭىزنىڭ بىخەتەرلىك تەڭشىكى تەھرىرلىگۈچنىڭ كۆچۈر مەشغۇلاتىنى ئۆزلۈكىدىن ئىجرا قىلىشىغا يول قويمايدۇ، ھەرپتاختا تېز كۇنۇپكا (Ctrl/Cmd+C) ئارقىلىق تاماملاڭ","cut":"كەس","cutError":"تور كۆرگۈڭىزنىڭ بىخەتەرلىك تەڭشىكى تەھرىرلىگۈچنىڭ كەس مەشغۇلاتىنى ئۆزلۈكىدىن ئىجرا قىلىشىغا يول قويمايدۇ، ھەرپتاختا تېز كۇنۇپكا (Ctrl/Cmd+X) ئارقىلىق تاماملاڭ","paste":"چاپلا","pasteArea":"چاپلاش دائىرىسى","pasteMsg":"ھەرپتاختا تېز كۇنۇپكا (<STRONG>Ctrl/Cmd+V</STRONG>) نى ئىشلىتىپ مەزمۇننى تۆۋەندىكى رامكىغا كۆچۈرۈڭ، ئاندىن <STRONG>جەزملە</STRONG>نى بېسىڭ","securityMsg":"توركۆرگۈڭىزنىڭ بىخەتەرلىك تەڭشىكى سەۋەبىدىن بۇ تەھرىرلىگۈچ چاپلاش تاختىسىدىكى مەزمۇننى بىۋاستە زىيارەت قىلالمايدۇ، بۇ كۆزنەكتە قايتا بىر قېتىم چاپلىشىڭىز كېرەك.","title":"چاپلا"},"contextmenu":{"options":"قىسقا يول تىزىملىك تاللانمىسى"},"button":{"selectedLabel":"%1 (تاللاندى)"},"toolbar":{"toolbarCollapse":"قورال بالداقنى قاتلا","toolbarExpand":"قورال بالداقنى ياي","toolbarGroups":{"document":"پۈتۈك","clipboard":"چاپلاش تاختىسى/يېنىۋال","editing":"تەھرىر","forms":"جەدۋەل","basicstyles":"ئاساسىي ئۇسلۇب","paragraph":"ئابزاس","links":"ئۇلانما","insert":"قىستۇر","styles":"ئۇسلۇب","colors":"رەڭ","tools":"قورال"},"toolbars":"قورال بالداق"},"elementspath":{"eleLabel":"ئېلېمېنت يولى","eleTitle":"%1 ئېلېمېنت"},"format":{"label":"پىچىم","panelTitle":"پىچىم","tag_address":"ئادرېس","tag_div":"ئابزاس (DIV)","tag_h1":"ماۋزۇ 1","tag_h2":"ماۋزۇ 2","tag_h3":"ماۋزۇ 3","tag_h4":"ماۋزۇ 4","tag_h5":"ماۋزۇ 5","tag_h6":"ماۋزۇ 6","tag_p":"ئادەتتىكى","tag_pre":"تىزىلغان پىچىم"},"horizontalrule":{"toolbar":"توغرا سىزىق قىستۇر"},"image":{"alt":"تېكىست ئالماشتۇر","border":"گىرۋەك چوڭلۇقى","btnUpload":"مۇلازىمېتىرغا يۈكلە","button2Img":"نۆۋەتتىكى توپچىنى سۈرەتكە ئۆزگەرتەمسىز؟","hSpace":"توغرىسىغا ئارىلىقى","img2Button":"نۆۋەتتىكى سۈرەتنى توپچىغا ئۆزگەرتەمسىز؟","infoTab":"سۈرەت","linkTab":"ئۇلانما","lockRatio":"نىسبەتنى قۇلۇپلا","menu":"سۈرەت خاسلىقى","resetSize":"ئەسلى چوڭلۇق","title":"سۈرەت خاسلىقى","titleButton":"سۈرەت دائىرە خاسلىقى","upload":"يۈكلە","urlMissing":"سۈرەتنىڭ ئەسلى ھۆججەت ئادرېسى كەم","vSpace":"بويىغا ئارىلىقى","validateBorder":"گىرۋەك چوڭلۇقى چوقۇم سان بولىدۇ","validateHSpace":"توغرىسىغا ئارىلىق چوقۇم پۈتۈن سان بولىدۇ","validateVSpace":"بويىغا ئارىلىق چوقۇم پۈتۈن سان بولىدۇ"},"indent":{"indent":"تارايت","outdent":"كەڭەيت"},"fakeobjects":{"anchor":"لەڭگەرلىك نۇقتا","flash":"Flash جانلاندۇرۇم","hiddenfield":"يوشۇرۇن دائىرە","iframe":"IFrame","unknown":"يوچۇن نەڭ"},"link":{"acccessKey":"زىيارەت كۇنۇپكا","advanced":"ئالىي","advisoryContentType":"مەزمۇن تىپى","advisoryTitle":"ماۋزۇ","anchor":{"toolbar":"لەڭگەرلىك نۇقتا ئۇلانمىسى قىستۇر/تەھرىرلە","menu":"لەڭگەرلىك نۇقتا ئۇلانما خاسلىقى","title":"لەڭگەرلىك نۇقتا ئۇلانما خاسلىقى","name":"لەڭگەرلىك نۇقتا ئاتى","errorName":"لەڭگەرلىك نۇقتا ئاتىنى كىرگۈزۈڭ","remove":"لەڭگەرلىك نۇقتا ئۆچۈر"},"anchorId":"لەڭگەرلىك نۇقتا ID سى بويىچە","anchorName":"لەڭگەرلىك نۇقتا ئاتى بويىچە","charset":"ھەرپ كودلىنىشى","cssClasses":"ئۇسلۇب خىلى ئاتى","download":"Force Download","displayText":"Display Text","emailAddress":"ئادرېس","emailBody":"مەزمۇن","emailSubject":"ماۋزۇ","id":"ID","info":"ئۇلانما ئۇچۇرى","langCode":"تىل كودى","langDir":"تىل يۆنىلىشى","langDirLTR":"سولدىن ئوڭغا (LTR)","langDirRTL":"ئوڭدىن سولغا (RTL)","menu":"ئۇلانما تەھرىر","name":"ئات","noAnchors":"(بۇ پۈتۈكتە ئىشلەتكىلى بولىدىغان لەڭگەرلىك نۇقتا يوق)","noEmail":"ئېلخەت ئادرېسىنى كىرگۈزۈڭ","noUrl":"ئۇلانما ئادرېسىنى كىرگۈزۈڭ","other":"‹باشقا›","popupDependent":"تەۋە (NS)","popupFeatures":"قاڭقىش كۆزنەك خاسلىقى","popupFullScreen":"پۈتۈن ئېكران (IE)","popupLeft":"سول","popupLocationBar":"ئادرېس بالداق","popupMenuBar":"تىزىملىك بالداق","popupResizable":"چوڭلۇقى ئۆزگەرتىشچان","popupScrollBars":"دومىلىما سۈرگۈچ","popupStatusBar":"ھالەت بالداق","popupToolbar":"قورال بالداق","popupTop":"ئوڭ","rel":"باغلىنىش","selectAnchor":"بىر لەڭگەرلىك نۇقتا تاللاڭ","styles":"قۇر ئىچىدىكى ئۇسلۇبى","tabIndex":"Tab تەرتىپى","target":"نىشان","targetFrame":"‹كاندۇك›","targetFrameName":"نىشان كاندۇك ئاتى","targetPopup":"‹قاڭقىش كۆزنەك›","targetPopupName":"قاڭقىش كۆزنەك ئاتى","title":"ئۇلانما","toAnchor":"بەت ئىچىدىكى لەڭگەرلىك نۇقتا ئۇلانمىسى","toEmail":"ئېلخەت","toUrl":"ئادرېس","toolbar":"ئۇلانما قىستۇر/تەھرىرلە","type":"ئۇلانما تىپى","unlink":"ئۇلانما بىكار قىل","upload":"يۈكلە"},"list":{"bulletedlist":"تۈر بەلگە تىزىمى","numberedlist":"تەرتىپ نومۇر تىزىمى"},"magicline":{"title":"بۇ جايغا ئابزاس قىستۇر"},"maximize":{"maximize":"چوڭايت","minimize":"كىچىكلەت"},"pastetext":{"button":"پىچىمى يوق تېكىست سۈپىتىدە چاپلا","title":"پىچىمى يوق تېكىست سۈپىتىدە چاپلا"},"pastefromword":{"confirmCleanup":"سىز چاپلىماقچى بولغان مەزمۇن MS Word تىن كەلگەندەك قىلىدۇ، MS Word پىچىمىنى تازىلىۋەتكەندىن كېيىن ئاندىن چاپلامدۇ؟","error":"ئىچكى خاتالىق سەۋەبىدىن چاپلايدىغان سانلىق مەلۇماتنى تازىلىيالمايدۇ","title":"MS Word تىن چاپلا","toolbar":"MS Word تىن چاپلا"},"removeformat":{"toolbar":"پىچىمنى چىقىرىۋەت"},"sourcearea":{"toolbar":"مەنبە"},"specialchar":{"options":"ئالاھىدە ھەرپ تاللانمىسى","title":"ئالاھىدە ھەرپ تاللاڭ","toolbar":"ئالاھىدە ھەرپ قىستۇر"},"scayt":{"btn_about":"شۇئان ئىملا تەكشۈرۈش ھەققىدە","btn_dictionaries":"لۇغەت","btn_disable":"شۇئان ئىملا تەكشۈرۈشنى چەكلە","btn_enable":"شۇئان ئىملا تەكشۈرۈشنى قوزغات","btn_langs":"تىل","btn_options":"تاللانما","text_title":"شۇئان ئىملا تەكشۈر"},"stylescombo":{"label":"ئۇسلۇب","panelTitle":"ئۇسلۇب","panelTitle1":"بۆلەك دەرىجىسىدىكى ئېلېمېنت ئۇسلۇبى","panelTitle2":"ئىچكى باغلانما ئېلېمېنت ئۇسلۇبى","panelTitle3":"نەڭ (Object) ئېلېمېنت ئۇسلۇبى"},"table":{"border":"گىرۋەك","caption":"ماۋزۇ","cell":{"menu":"كاتەكچە","insertBefore":"سولغا كاتەكچە قىستۇر","insertAfter":"ئوڭغا كاتەكچە قىستۇر","deleteCell":"كەتەكچە ئۆچۈر","merge":"كاتەكچە بىرلەشتۈر","mergeRight":"كاتەكچىنى ئوڭغا بىرلەشتۈر","mergeDown":"كاتەكچىنى ئاستىغا بىرلەشتۈر","splitHorizontal":"كاتەكچىنى توغرىسىغا بىرلەشتۈر","splitVertical":"كاتەكچىنى بويىغا بىرلەشتۈر","title":"كاتەكچە خاسلىقى","cellType":"كاتەكچە تىپى","rowSpan":"بويىغا چات ئارىسى قۇر سانى","colSpan":"توغرىسىغا چات ئارىسى ئىستون سانى","wordWrap":"ئۆزلۈكىدىن قۇر قاتلا","hAlign":"توغرىسىغا توغرىلا","vAlign":"بويىغا توغرىلا","alignBaseline":"ئاساسىي سىزىق","bgColor":"تەگلىك رەڭگى","borderColor":"گىرۋەك رەڭگى","data":"سانلىق مەلۇمات","header":"جەدۋەل باشى","yes":"ھەئە","no":"ياق","invalidWidth":"كاتەكچە كەڭلىكى چوقۇم سان بولىدۇ","invalidHeight":"كاتەكچە ئېگىزلىكى چوقۇم سان بولىدۇ","invalidRowSpan":"قۇر چات ئارىسى چوقۇم پۈتۈن سان بولىدۇ ","invalidColSpan":"ئىستون چات ئارىسى چوقۇم پۈتۈن سان بولىدۇ","chooseColor":"تاللاڭ"},"cellPad":"يان ئارىلىق","cellSpace":"ئارىلىق","column":{"menu":"ئىستون","insertBefore":"سولغا ئىستون قىستۇر","insertAfter":"ئوڭغا ئىستون قىستۇر","deleteColumn":"ئىستون ئۆچۈر"},"columns":"ئىستون سانى","deleteTable":"جەدۋەل ئۆچۈر","headers":"ماۋزۇ كاتەكچە","headersBoth":"بىرىنچى ئىستون ۋە بىرىنچى قۇر","headersColumn":"بىرىنچى ئىستون","headersNone":"يوق","headersRow":"بىرىنچى قۇر","invalidBorder":"گىرۋەك توملۇقى چوقۇم سان بولىدۇ","invalidCellPadding":"كاتەكچىگە چوقۇم سان تولدۇرۇلىدۇ","invalidCellSpacing":"كاتەكچە ئارىلىقى چوقۇم سان بولىدۇ","invalidCols":"بەلگىلەنگەن قۇر سانى چوقۇم نۆلدىن چوڭ بولىدۇ","invalidHeight":"جەدۋەل ئېگىزلىكى چوقۇم سان بولىدۇ","invalidRows":"بەلگىلەنگەن ئىستون سانى چوقۇم نۆلدىن چوڭ بولىدۇ","invalidWidth":"جەدۋەل كەڭلىكى چوقۇم سان بولىدۇ","menu":"جەدۋەل خاسلىقى","row":{"menu":"قۇر","insertBefore":"ئۈستىگە قۇر قىستۇر","insertAfter":"ئاستىغا قۇر قىستۇر","deleteRow":"قۇر ئۆچۈر"},"rows":"قۇر سانى","summary":"ئۈزۈندە","title":"جەدۋەل خاسلىقى","toolbar":"جەدۋەل","widthPc":"پىرسەنت","widthPx":"پىكسېل","widthUnit":"كەڭلىك بىرلىكى"},"undo":{"redo":"قايتىلا ","undo":"يېنىۋال"},"wsc":{"btnIgnore":"پەرۋا قىلما","btnIgnoreAll":"ھەممىگە پەرۋا قىلما","btnReplace":"ئالماشتۇر","btnReplaceAll":"ھەممىنى ئالماشتۇر","btnUndo":"يېنىۋال","changeTo":"ئۆزگەرت","errorLoading":"لازىملىق مۇلازىمېتىرنى يۈكلىگەندە خاتالىق كۆرۈلدى: %s.","ieSpellDownload":"ئىملا تەكشۈرۈش قىستۇرمىسى تېخى ئورنىتىلمىغان، ھازىرلا چۈشۈرەمسىز؟","manyChanges":"ئىملا تەكشۈرۈش تامام: %1  سۆزنى ئۆزگەرتتى","noChanges":"ئىملا تەكشۈرۈش تامام: ھېچقانداق سۆزنى ئۆزگەرتمىدى","noMispell":"ئىملا تەكشۈرۈش تامام: ئىملا خاتالىقى بايقالمىدى","noSuggestions":"-تەكلىپ يوق-","notAvailable":"كەچۈرۈڭ، مۇلازىمېتىرنى ۋاقتىنچە ئىشلەتكىلى بولمايدۇ","notInDic":"لۇغەتتە يوق","oneChange":"ئىملا تەكشۈرۈش تامام: بىر سۆزنى ئۆزگەرتتى","progress":"ئىملا تەكشۈرۈۋاتىدۇ…","title":"ئىملا تەكشۈر","toolbar":"ئىملا تەكشۈر"}};