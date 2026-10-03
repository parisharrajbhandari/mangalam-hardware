// ============================================================
// BUSINESS CARD CONFIGURATION
// Edit the details below to update your NFC business card.
// All changes here will automatically reflect on the page.
// ============================================================

const BUSINESS_CONFIG = {

    // --- Personal Details ---
    person: {
        firstName: "Euro",
        middleName: "Green",
        lastName: "Motors  Pvt. Ltd.",
        fullName: "Mangalam Hardware",       // Displayed in header & vCard
        title: "",              // Job title / designation
    },

    // --- Company Details ---
    company: {
        name: "Mangalam Hardware",    // Displayed in header & page title
        tagline: "Authorized Dealer of BYD Auto Industry CO. Ltd. for Chitwan",               // Used in the page <title>
        aboutHeading: "About Us",     // Heading for the about section
        aboutText: `Welcome to Euro Green Motors Pvt. Ltd., your trusted destination for cutting-edge New Energy Vehicles (NEVs). As an authorized dealer of BYD Auto Industry CO. Ltd., we are proud to bring world-class electric mobility solutions to Chitwan and surrounding regions.`,
    },

    // --- Contact Details ---
    contact: {
        phones: [
            { number: "+9779801368497", label: "Work" },
            { number: "+9779801360526", label: "Work" },
            { number: "+9779801360529", label: "Work" },
            { number: "+9779801360534", label: "Work" },
            { number: "+9779801360456", label: "Work" },

        ],
        whatsapp: "9779801360534",            // WhatsApp number (without +)
        email: "eurogreenmotorspvtltd@gmail.com",
        locationUrl: "https://maps.app.goo.gl/xVNr6pTWNFYzpJEZA",
        reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJAYFqY93llDkRjoADk-7xOR0",
    },

    // --- Social Media Links ---
    // Each entry: { platform, url, icon (FontAwesome class), label }
    // Add, remove, or reorder entries as needed.
    socials: [
        {
            platform: "Instagram",
            url: "https://www.instagram.com/byd_chitwan/",
            icon: "fab fa-instagram",
        },
        {
            platform: "TikTok",
            url: "https://www.tiktok.com/@byd.chitwan",
            icon: "fab fa-tiktok",
        },
        {
            platform: "Facebook",
            url: "https://www.facebook.com/bydchitwan",
            icon: "fab fa-facebook-f",
        },
        {
            platform: "Website",
            url: "https://eurogreenautocare.tappoo.workers.dev/",
            icon: "fa-solid fa-globe",
        },
    ],

    // --- Logo ---
    logo: {
        src: "image/byd_logo.png",
        alt: "BYD logo",
    },

    // --- vCard / Address Details ---
    vcard: {
        // This note will be saved with the contact on the device.
        // Customize it to include any info you want the recipient to see.
        contactNote: "Euro Green Motors Pvt. Ltd. - BYD Authorized Dealer, Bharatpur, Chitwan.",
        addressStreet: "BYD Chitwan",
        addressCity: "Chitwan",
        addressState: "Bagmati",
        addressCountry: "Nepal",
        // Base64-encoded photo for the vCard (PNG).
        // Replace this string to change the contact photo.
        photoFormat: "JPEG",
        // Square contact profile photo (400x400 JPEG, centered BYD logo on white background)
        photoBase64: "/9j/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGQAZADASIAAhEBAxEB/8QAHQABAQEAAgMBAQAAAAAAAAAAAAkIAQcCAwQGBf/EAFcQAQABAgQCAwkJCgoGCwAAAAABAgMEBQYRBwgSIVEJExgxQVeV0tMUGSJWYXGBkZMyN1JTcnaUscPRFRY4QmZ1goW0wRdikqGz8CQnQ0RHVFWio7Li/8QAHAEBAAICAwEAAAAAAAAAAAAAAAUGBAcBAwgC/8QASBEBAAECAwIJCQMICQUBAAAAAAECAwQFEQYhBxITMVFhkdHSFRYXQVJxgaHhFFSSIyU0NmKio7EiJCcyQlNkc8EzcoKTwtP/2gAMAwEAAhEDEQA/AKpgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAON4jxy5T25z+YbjNw443YzTWite4/Ksst4DCXacNZptzTFdVveqfhUzPXLExmLowVvlK4mY103LNspsvidrcdOAwldNNUUzVrVrppExHqiZ13qEbx2wbx2wkF4YfMp52M1+zs+oeGHzKedjNfs7PqIzzgsezPy72xfQbnX3i121+BX3eO2DeO2EgvDD5lPOxmv2dn1Dww+ZTzsZr9nZ9Q84LHsz8u89BudfeLXbX4Ffd47YN47YSC8MPmU87Ga/Z2fUeVPORzLURtTxXzLb5bGHn9ds84LHsz8u9xPAbnf3i121+BXveO2DeO2EhvDL5mPOtmP6Nh/ZuY5zuZuJ3jivj/ANEws/snPnBh/Zq+Xe49B2efeLXbX4FeN4nyuUmMo55+ZnK7sXLvEGnH0eW3i8swtVM/TFuKvql31wj7pPRicXYyrjJpazhbVyYonNsnprmm38tzD1TMzHlmaKt+ymXdazvC3Z4s60+/6aonM+B/aTLrU3bcUXoj1UVTr2VRTr7o1nqbtHwZDn2TanyfCag09mWHzDLsfai9hsTh64rt3aJ8UxMf8xMTE9b70tExMaw1dXRVbqmiuNJjdMTzxLjeI8ZvHbDN/PbxL1vwu4T5TnugtQ4jJ8fiM+s4W5fsU0zVVamxfqmn4UTG29NM/Qwl4YfMp52M1+zs+oi8Xm1rB3OSriZnq072yNmODHMtqsvjMcLet00zMxpVNWu73UzHzV98ficuieTDXeruI3BHCam1rnd/Nczu5hi7VWIvRTFU0U1RFMfBiI6ut3skLN2L9um5HNMaqNm+W3Mnx97L70xNVuqaZmOaZidN2uk6fAAdqOAAAAHHi8bl0Jzra+1fw34K3NSaIzy/lOZU5rhbEYizFM1d7q6fSp+FEx17R9Tqv3YsW6rlXNEapLJ8suZzj7OX2ZiKrlUUxM80TO7fprPyd9bx2wbxPiSC8MPmU87Ga/Z2fUb35GuImtOJvBzGai13n9/N8xt59icLTiL0UxVFqmzYqin4MRG0TXVP0sDCZraxlzkqImJ69O9dtqODLMtlMB5RxV63VTrFOlPG13++mI9XS0O43jtglKXiRzY8w2TcQ9UZRlnFDM7GDwWc43D4e1Tbs7W7dF+ummmN6N9oiIh343HUYGImuJnXoRGyGxeM2yuXbWDuU0TbiJnja79debSJ6FWt47YN47YSC8MPmU87Ga/Z2fUc0c43MrRO9PFfNP7VmxP67aO84LHsz8u9evQbnf3i121+BXzeO2DeO2EhvDL5mPOtmP6Nh/Zkc5nMzHi4rZh9OFw0/s3PnBh/Zn5d759B2efeLXbX4Fed47YN47YSIjnQ5m6fFxXx304PCz+ye6jna5n6J++liJ+fLcHP7E8v4f2avl3vmeA/PvVfs9tfgVx3hyk5g+e7mbwtUTc1/ZxER46buU4OYn6rUS/daU7pPxeyu9TTqnTOns8w0bdLvdu5hL0/NXTVVRH+xLsoz3C1Tv1j4d0yw8TwL7SWKZqtzbrnopqmJ/eppj5qUjOnB/nm4NcUcRYybM8Xd0nnN6Yoow2aV0xYu1z/ADbeIj4E9cxERXFEzPiiWiomJjeJSlm/bxFPGtVaw1xmuS5hkd/7PmNmq3V1xz9cTzTHXEzDkB2osAAAAAAAAYh5ruT/AItcZeLuK1rpCrJIy69gsLYp9142bdzpW6OjV8GKZ6t23hjYrC28XRydzm51g2b2kxuy2MnHYDi8eaZp/pRrGkzE9MdCX3vdPMF+M0x6Sq9me908wX4zTHpKr2aoIj/IWF6+36L16aNpei3+GfEl973TzBfjNMekqvZnvdPMF+M0x6Sq9mqCHkLC9fb9D00bS9Fv8M+JL73unmC/GaY9JVezPe6eYL8Zpj0lV7NUEPIWF6+36Hpo2l6Lf4Z8SXs9zp5g4jqr0xP951ezeurud/MLTvta07Vt2ZpH+dKou8dpvHaeQsL19v0cxw0bSR6rf4Z8STGruR/mJ0jld7OLujreZ4fDUzXdjLMZbxFymmI3mYtRPTq/s0zLoWqmqiqaaomJidpifIvBVtMbfUjbzOYnTGM4+a3xOj5w85Xcza5NurD7d7qu7R36qnbqmJu98mJjqndEZrltvBU0125nfu0ltLg14QMw2uv3sJj7VMTRTxoqpiYjniNJiZnfOusaTG6J3O9u55ccsy09rieDmc42u5k2oIuXcuprqmYw2NopmqYp7KblNNUTH4UU7eOd6PI0ctFGMr4/8P6cD0u+fxhwMz0fwIu0zX9HR6W/yLLR4krkV2q5h5pq9U7ms+GnLMPgs8t4mxGk3qONVHTVEzGvxjTXpmJnnZH7pbP/AFKZFH9JrP8AhcQmqpb3Su3NXBDJK4j7nU1j/fhsQmkhs7/S590Nr8Dv6r0f99f81T+59fyc8v8A60x3/wB6WlGZe554qziOXixatXIqqw2cY21ciJ+5qnoVbfVVEtNLRl/6Lb90POW3UTG0uO1/za/5gDMVQAAAAZk7od/J5u/11gv1XGm2W+6MY+xhOAFnDXa6YuYzPsJat0zPXMxbvVzt9FLDzDdhbnulbdg4mrabAxH+ZT/NMBTnub/3gsf+cuL/AMPhkxlO+5w0TTwBxsz/ADtSYuY+ww8f5Kzkf6X8JeiOGX9WJ/3KP+Wp5Ta17yCceNR641DqHL/4u+5czzXF4yx3zMZpq73cvVV07x0OqdphSYWfF4K1jYiLmu7oec9l9sMx2RuXLmXxTrciInjRrza82+OlL2O51cwc+OrTMfPmc+o597p5gvxmmPSVXs1QRg+QsL19v0XH00bSdFv8M+JL73unmC/GaY9JVezPe6eYL8Zpj0lV7NUEPIWF6+36Hpo2l6Lf4Z8SXVfc7uYSjxW9OV/k5n++iHzXe588xdv7jKMmu/kZra/z2VOHHkLC9M9v0fVPDVtJHPTan/xq8STuZciHMxgLNV63oSxi4p8mHzXCVVT80TciZdUa14V8RuHN+LGuNFZxkvSnai5i8JXRbuT/AKle3Rq+iZW4fJm2TZTn2XX8ozvLcLj8DiqJt3sNibNN21cpnyVUVRMTHzw6rmz9mY/J1TE9ek9yUy/hxzS3cj7fh7ddHr4vGpn5zVHy+KFETMTvE7S1vyic5ebcPMywfDzidmt3G6TxNdNjC43EVzXcyqqZ2p+FPXNjtp/mx109UTTPu5zuUDCcLbVfE/hrhrkaZu3oozHL5qmv+Dblc7U10TPXNmqZinaZmaapiN5iY2yF4pQP9Yyu/wBEx2THc3TTOScI+ScbTj2q+ndVRVHbxao7JjppnfeC1ct3rdN21XTXRXEVU1UzvExPimJ8sPNlzkA4w4niHwou6OzrFzezXRty3hKaq6t668FXEzYmfyejXb+amlqNd8PfpxNqm7TzS8e59k97Z/Mr2W4j+9bnTXpjnifjExPxAHciAAAAAABg7m85quNfCXjLi9I6I1NYwWV2sDhL1FmvLsPemK66N6p6VdE1dc/K3iwbze8qvGrizxlxmrtEaYsY3K7uBwlmi9XmOHszNdFG1UdGuuKuqfkRma8vyEfZ9ddfVrr8mxODHyP5Zq8t8nyXJ1acrxeLxtadP727XTXr53Svh78zPx2wnofCezPD35mfjthPQ+E9meATzM/EnCemMH7Q8AnmZ+JOE9MYP2iufnP9v95v7+zz/SfwTw9+Zn47YT0PhPZnh78zPx2wnofCezPAJ5mfiThPTGD9oeATzM/EnCemMH7Q/Of7f7x/Z5/pP4J4e/Mz8dsJ6Hwns3FXPtzNTG0a4wkfLGT4P2bnwCeZn4k4T0xg/aHgE8zPxJwnpjB+0Pzn+3+8f2ef6T+C9Xh5czvx+w/ofBeyeNXPfzPVf+INmPmyfBeye6eQrmaiOrQ+Fn5s4wftHouciXM7bnb/AEe2qvyc3wU/tXH5z/b/AHn1Ho9nm+x/wX57V3NtzDa3y29k+fcTMwnBYijvd21hLVnCd8pnx01TZopmYmOqYmdpdQzMzO8u3dW8pfMNonLr2b57wyzH3HYpmu5dwly1i4opjx1VRZrqmIjyzMbQ6imNuqWHiOX435fXXr1/5W7JPI/Iz5F5Lk9d/JcTTXr4m7X3tp9zw4D5lmmqKuN2fYKq1leU0XcPk83KNvdOKqiaK7lO/jot0zVTv+FV1TvTO1EE7u548eMyynVU8Es+xtV3Ks3pu4jJ4uVzPubFUxNddunfxUXKYqnb8OmNuuqd6Irdk3J/ZY5P4+95Z4WvKHnLc+36acWOT05uT36fHXjcb9rXTdozP3QrJb+a8u2Jxlm3NdOUZvgsbc2jfamenZ3+u9CWi5GtdIZLr7SebaM1FYm7l2cYW5hMRTTO1UU1R91TPkqidqonyTEJbcW+SrjZw2zbFRlOl8ZqnJaapnDY/KbM36qqN+rp2ad7lFW22/VNO/iqlGZ5g7lVyL1EaxppOjYXA3tVl+Hy+vKMXdpt3IrmqnjTERVFURuiZ3axMTu59J3a6Tp/D5feaDXvL3iMbY0/h8HmWUZlXTcxWXYyKuhNyI2i5RVTMTRXt1TPXExtvE7RtoW13ULMYp2v8GsPM7eOnPao3/8AgY2xXD/XWBrm3jtG53h6qfHTdy+9RMfRNL46tL6jonavIcwpn5cNX+5F2cdi8NTxKKpiPd3tlZpsZsxn+InGY2xTXcnnqiqqnX38WqNd3rne2376Fd8zNHp6fYO2uWnnMr5hNd4zRdXD6nI4wuV3cx90Rmc4jpdC5bo6HR71Ttv3zfffyeJMr+LOoZ6oyTH/AKNX+5qvuceTZvl3HDNr+PyzFYe3OmsTTFV2zVREz7ow3VvMfJLPwWZYu7iKKK6t0z0R3KRthwf7L5ZkWKxeDw8U3KKZmmePXOk7vVNUxPxhojmV5zq+X3XuF0VTw+pzyMTldrMfdE5nOH6PTuXKOh0e9VeLve++/l8Tqf30K75maPT0+wdf90l+/wAZX+bOF/xGJZRcY7M8VZxFdFFWkRPRHc7Nj+DrZrNMiwuMxeG41yuiJmePXGs+6Kojshu730K75maPT0+wJ7qFe26uDNG/9fT7Bh7CZJnGYWfdGByvF4i1vNPTtWaqqd+zeI+V7/4r6k/9AzD9Gr/cxvK2On/H8o7lhngw2OidJwsf+y5421LvdQsymnazwaw0VbeOrPKpiJ+aLEM6cf8AmZ17zCY/BzqS3hMvyvLZqqweXYOKot0VVbRNyuqqZmuuYiI3naIjxRG879b06V1NVO1On8xmfkwtf7n24Th1r/MKooy/ROfYqqfFTZy69XM/RFLqvY3F4mniXKpmPd3JLKtjtmNn78YzBWKaK45qpqqnTXn041U6bvXG/R+dVV5AckxGUcuOV4q/aqo/hXMMbjaImNpmnvkWon6e9MZ8IOR/jRxFzjC1ak09i9J5FNVNWJxuZ2+9Xu9+WLdir4dVcx4t4intlUTSmmMn0XprLNJ6fw3ufLspwtvB4a3vvMW6Kdo3nyzPjmfLMzKVyPB3KLk3640jTSNWseGTavL8XgLeUYO7Fyua4qq4sxMUxETERMxu1mZ5ueNN+msP6wCzvOoAAAAAAAD+LrPS+Xa20nnGkc2tU3MJnGCvYK7FUb7RcomnePliZiYnyTEIfZhhLuAx2IwN+Ii5h7lVquI8k0ztP6lwdZ6oy7ROk831dm12m3g8nwV7G3Zqnbem3RNW0fLMxERHlmYQ+zDGXcwx2Ix1+Ym5iLtV2uY7ap3n9asbQ8XjW+nf/wAPRfARy/I43X/p60adHG0q10+Gmvwan7m/qC/lvG/MMl75/wBHzbI8RTVR5JuW7lu5TP0RFf1qaJmdzf09fzLjdmGedCfc+UZHfqqr8kXLtdu3TH0xNc/Qpmz8j1+yb+mVK4ZeT85p4nPydHG9+/8A+dABMNUgAAAAAAMP81/N9xc4N8XcVovSE5N/B1nBYW/T7qwXfa+lXR0qvhdKPKxsVireEo5S5zcywbN7NY3arGTgcBxePFM1f0p0jSJiOieluAS898U5hP6NejJ9c98U5hP6NejJ9dH+XcL19n1Xr0L7SdNv8U+FUMS8juinMHE9caan+7J9d5e+LcwX4GmfRlXtDy7hevs+p6F9pOm3+KfCqCJez3RXmCmOqnTMf3ZPtHj74nzCbxO+m+ryfwZ/+zy7hevs+p6F9pOm3+KfCqI42jsS8q7olzCVRt0tN0/LGWfvreue6G8w0/8AetPx/ddPrHl3C9fZ9XMcC20k/wCK1+KfCqNVtEbo4c0GH01heP8ArjD6Rpw9OWUZrciinD7d7pu7R36KYjqiIu98jaOqNn6bWHO5zFaxy27lF7WsZZhb9M0XYyvCW8NcqiY8XfaY75T/AGaodEVVVV1TXXVM1TO8zM9cojNcyt42mmi3E7p11ltLg14PsfshfvYvH3aZmunixTTMzHPE6zMxG+NNI0ieed7srloqxtPH7h/OA6Xff4w4GJ6P4E3aYr+jo9Lf5Fl48ScXc8uB2Zag1xVxjzrBXLWT6fi5ay6q5RtGJxtdM0zNPbTboqqmZ/CmnsnajyVyK1Vbw81VeudzWfDTmeHxueW8NZnWbNHFqnoqmZnT4Rpr0TMxzjjaHIm2nnHRj5frNnIDjYcgJld0m+/1lf5sYX/EYllFq7uk33+sr/NjC/4jEsoqFmX6Xc9723wf/qxgv9uFPu5zfyf7/wCcGM/4VhqTZlvuc38n+/8AnBjP+FYalXDLv0S37oeU9vv1mx3+5U42OjHy/W5GaqDjaIcgAOJTZ4hc+nHjTWvtS6dy3EZD7jyrOMbgsP08tiqrvVq9XRTvPS652pjrYmLxtrBRE3Nd/QtOy+yGYbXXLlrL5piaIiZ40zHPu3aRKk4lx74fzC/+Y096Lj1nnHdE+YSI23016Mn12D5dwvX2fVcvQvtJ02/xT4VRBLz3xTmE/o16Mn13rnuh/MLP/b6ej5srj1jy7hevs+pHAvtJ02/xT4VRxLWruhfMPV4sdkNPzZXR/nL0XO6B8x1f3Ge5Rb/Jymz/AJxLjy9heieyO99RwK7Rz/jtfiq8CqD5M2znKchy6/m+d5lhcBgcLRNy9icTeptWrdMeWquqYiI+eUp8x57OZnMLVVmjX1rCRV45w+VYSmr6J73Mw6q1rxT4i8Rb0X9b60zjOujPSooxeLrrt25/1KJno0/REOq5tBZiPydMzPXu70pl/Abmly5H2/E26KPXxeNVPzimPm0nzn83+D4o2a+GHDTFXZ0zavRXmOYdGaP4SuUTvTRRE9cWaZjpbz11VRE7RFMdLIURMzs5iJmdojeWv+ULkwzTXOYYLiRxVyq5g9M4eqm/gcuxFE03M0qjrpqqpnrpseXefu46o+DO6C/rGaYjXnmeyI7m5onJODfJOLrxbVGvXXXVP86p7IjopjdoXkE4OYrhxwnuaszvBzYzfWVdvG9Cunau3gqIn3PTP5XSrufNXT2NPPGiii3RTbt0xTTTERERG0RHY8l2w9inDWqbVPNDx/n2cXs/zK9mWI/vXJ106I5oj4RER8AB3IgAAAAAAT25z+XjjNxH43YzUuitB4/NcsuYDCWqcRZqtxTNdNvaqPhVRPVKhLjaJ8cMTGYSjG2+TrmYjXXcs2ym1GJ2Sx04/CUU1VTTNOlWumkzE+qYnXckF4HfMn5qM1+0s+ueB3zJ+ajNftLPrq+7R2QbR2QjPN/D+1Py7mxfTlnf3e12V+NILwO+ZPzUZr9pZ9c8DvmT81Ga/aWfXV92jsg2jsg838P7U/LuPTlnf3e12V+NILwO+ZPzUZr9pZ9dzTyc8ytc7U8KMz3+W9Yj9dxXzaOyDaOyDzfw/tT8u5x6cs7+72uyvxpDeBpzMeanMf0nD+0eUcmHM1Vttwpx3X24vCx+u6rvtHZBtHZDnzfw/tVfLucenHPPu9nsr8aTWU8i/Mzmd7vV7h9TgKPLdxWZ4SmmP9m5M/VDvnhJ3NijDYyxmvGTVVnFWrcxXOVZPVXFNzy7XMRVFMxHkmKKd+yqG7HLutZJhbU6zrV7/poicz4YNpMxtTatzRZifXRTOvbVNWnvjSet8GRZFk+mMowmQafy3D5fl2BtRZw2Gw9EUW7VEeKIiP8AmZ3mX3gloiIjSGrq66rlU11zrM75meeQBy+QAAAGCuejgFxe4ocYMv1DoPQ+OzfLrWQ4fC137NVuKYu03r9U0/Cqid4iumfpZ28DvmT81Ga/aWfXV92ifHBtHZCHv5LZxFybtVU6z7u5tjJuF3NskwFrL7Ni3NNuNImYq1n36VRHyZ95IOHusuGnBq9p3XOQ38ozGrOsTiIw96aZqm3VbsxTV8GZjaZpq+poNx4vE5Sdi1Fi3Tbp5oa6znNLudY+7mF6Iiq5VNUxGukTPRrrPzAHajAAHEpU8SeUjmKzviJqjOcs4YY+/g8fnWNxOHuxiMPEXLdd+uqmrrub9cTE9aq7jaOyGFjcDbx0RFczGnQuGyG2mN2NuXbuDt0VTciInja+rWd2kx0pDeBpzMeanMf0nD+0PA05mPNTmP6Th/aK87R2QbR2Qj/N/D+1V8u5evTjnn3e12V+NIbwNOZjzU5j+k4f2jyjkw5m6vFwpx304zCx+u6rvtHZBtHZB5v4f2qvl3OJ4cc8+72eyvxpGU8lPM9V4uFWKj58wwcftXvs8j3M9en72ddH5eaYKP2qtm0dhtHY58gYb2qvl3PieHDP55rFn8Nf/wCiUeF5CeZnEVRTd0ThMNTM/dXc3wm0f7NyZ/3P3OlO5q8V8yu01as1dp7JcPMxv3iq5jL0f2Ypoo/96kg+6MiwtM6zrPx7tGFieGfaW/TxbfJ0T000TM/vVVR8meeD/I/wZ4V4iznGMwN3VOc2ZiujF5rTTVatVx5bdiPgRO8RMTV06onxTDQsRs5EpZsW8PTxbVOkNc5rnOYZ3f8AtGY3qrlfTM83VEc0R1REQAO1GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z",
    },
};
