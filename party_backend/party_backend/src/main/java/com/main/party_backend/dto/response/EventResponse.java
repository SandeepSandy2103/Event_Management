package com.main.party_backend.dto.response;

import java.util.List;

import com.main.party_backend.model.AddonModel;
import com.main.party_backend.model.EventModel;
import com.main.party_backend.model.FoodModel;
import com.main.party_backend.model.ThemeModel;
import com.main.party_backend.model.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EventResponse {
    private User user;
    private EventModel event;
    private ThemeModel theme;
    private AddonModel addon;
    private List<FoodModel> food;
}
