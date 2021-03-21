package com.example.swipsum.ui.dashboard

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class DashboardViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        value = "ArnoldC is my favorite programming language"
    }
    val text: LiveData<String> = _text
}